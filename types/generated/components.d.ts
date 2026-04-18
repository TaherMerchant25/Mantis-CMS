import type { Schema, Struct } from '@strapi/strapi';

export interface LandingFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_heroes';
  info: {
    description: 'Landing hero content block';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    headlineAccent: Schema.Attribute.String;
    primaryCta: Schema.Attribute.Component<'shared.link', false>;
    secondaryCta: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface LandingIntegrationItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_integration_items';
  info: {
    displayName: 'Integration Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface LandingJoinTeam extends Struct.ComponentSchema {
  collectionName: 'components_landing_join_teams';
  info: {
    displayName: 'Join Team';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    descriptionSecondary: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingShowcaseItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_showcase_items';
  info: {
    displayName: 'Showcase Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_columns';
  info: {
    description: 'Footer group of links';
    displayName: 'Footer Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'Reusable navigation or CTA link';
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.feature-card': LandingFeatureCard;
      'landing.hero': LandingHero;
      'landing.integration-item': LandingIntegrationItem;
      'landing.join-team': LandingJoinTeam;
      'landing.showcase-item': LandingShowcaseItem;
      'navigation.footer-column': NavigationFooterColumn;
      'shared.link': SharedLink;
    }
  }
}
