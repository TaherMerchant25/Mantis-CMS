import type { Core } from '@strapi/strapi';
import { seedLandingContent } from './bootstrap/landing-seed';

/** Reserved `public`; custom CMS app roles use distinct `type` values. */
type RoleType = 'public' | 'landing_editor' | 'landing_admin';

const CMS_CONTENT_ACTIONS = [
  'api::landing-page.landing-page.find',
  'api::landing-page.landing-page.findOne',
  'api::navigation.navigation.find',
  'api::navigation.navigation.findOne',
  'api::site-setting.site-setting.find',
  'api::site-setting.site-setting.findOne',
];

const EDITOR_ACTIONS = [
  ...CMS_CONTENT_ACTIONS,
  'api::landing-page.landing-page.update',
  'api::navigation.navigation.update',
  'api::site-setting.site-setting.update',
  'plugin::upload.content-api.find',
  'plugin::upload.content-api.findOne',
  'plugin::upload.content-api.upload',
];

const ADMIN_ACTIONS = [
  ...EDITOR_ACTIONS,
  'api::landing-page.landing-page.create',
  'api::landing-page.landing-page.delete',
  'api::navigation.navigation.create',
  'api::navigation.navigation.delete',
  'api::site-setting.site-setting.create',
  'api::site-setting.site-setting.delete',
  'plugin::upload.content-api.destroy',
];

async function upsertRole(strapi: Core.Strapi, type: RoleType, name: string, description: string) {
  const roleQuery = strapi.db.query('plugin::users-permissions.role');
  const existing = await roleQuery.findOne({ where: { type } });

  if (existing) {
    return existing;
  }

  return roleQuery.create({
    data: {
      type,
      name,
      description,
    },
  });
}

/** Add missing permissions without removing existing rows (safe for the default Public role). */
async function ensurePermissions(strapi: Core.Strapi, roleId: number, actions: string[]) {
  const permissionQuery = strapi.db.query('plugin::users-permissions.permission');

  for (const action of actions) {
    const existing = await permissionQuery.findOne({ where: { role: roleId, action } });
    if (!existing) {
      await permissionQuery.create({
        data: {
          action,
          role: roleId,
        },
      });
    }
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const publicRole = await upsertRole(
      strapi,
      'public',
      'Public',
      'Default role; includes anonymous read access to published landing API'
    );
    const editorRole = await upsertRole(
      strapi,
      'landing_editor',
      'Editor',
      'Editors can update landing content and upload assets (Users & Permissions)'
    );
    const adminRole = await upsertRole(
      strapi,
      'landing_admin',
      'Admin',
      'Admins can fully manage landing content and assets (Users & Permissions)'
    );

    await ensurePermissions(strapi, publicRole.id, CMS_CONTENT_ACTIONS);
    await ensurePermissions(strapi, editorRole.id, EDITOR_ACTIONS);
    await ensurePermissions(strapi, adminRole.id, ADMIN_ACTIONS);

    await seedLandingContent(strapi);
  },
};
