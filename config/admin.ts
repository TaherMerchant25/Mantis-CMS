import type { Core } from '@strapi/strapi';

const PREVIEW_UIDS = new Set([
  'api::landing-page.landing-page',
  'api::navigation.navigation',
  'api::site-setting.site-setting',
]);

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => {
  const clientUrl = env('CLIENT_URL', '')?.replace(/\/$/, '');
  const previewSecret = env('PREVIEW_SECRET', '');

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: Boolean(clientUrl && previewSecret),
      config: {
        allowedOrigins: clientUrl ? [clientUrl] : [],
        handler(uid: string, { status }: { documentId: string; locale?: string; status?: string }) {
          if (!clientUrl || !previewSecret || !PREVIEW_UIDS.has(uid)) {
            return null;
          }
          const params = new URLSearchParams({
            secret: previewSecret,
            status: status === 'published' ? 'published' : 'draft',
          });
          return `${clientUrl}/api/preview?${params.toString()}`;
        },
      },
    },
  };
};

export default config;
