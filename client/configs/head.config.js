/* global DocHead*/

export default function () {
  DocHead.addMeta({
    charset: 'UTF-8'
  });
  DocHead.addMeta({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
  });
  DocHead.addMeta({
    name: 'description',
    content: 'Mantra Kickstarter'
  });
  DocHead.addMeta({
    name: 'fragment',
    content: '!'
  });

  var title = 'Mantra Kickstarter';
  DocHead.setTitle(title);

    /* Android */
  DocHead.addMeta({
    name: 'theme-color',
    content: '#FFFFFF'
  });
  DocHead.addMeta({
    name: 'mobile-web-app-capable',
    content: 'yes'
  });

    /* iOS */
  DocHead.addMeta({
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  });
  DocHead.addMeta({
    name: 'apple-touch-fullscreen',
    content: 'yes'
  });
  DocHead.addMeta({
    name: 'apple-mobile-web-app-title',
    content: 'MEP BO'
  });
  DocHead.addMeta({
    name: 'apple-mobile-web-app-status-bar-styles',
    content: 'white'
  });

    /* Windows Phone */
  DocHead.addMeta({
    name: 'msapplication-TileColor',
    content: '#FFFFFF'
  });

  DocHead.addMeta({
    name: 'theme-color',
    content: '#FFFFFF'
  });


    /* FAVICON */
  DocHead.addLink({
    rel: 'icon', size: '192x192', type: 'image/png', href: ''
  });
  DocHead.addLink({
    rel: 'icon', size: '32x32', type: 'image/png', href: ''
  });
  DocHead.addLink({
    rel: 'icon', size: '96x96', type: 'image/png', href: ''
  });
  DocHead.addLink({
    rel: 'icon', size: '16x16', type: 'image/png', href: ''
  });
  DocHead.addLink({
    rel: 'manifest', href: ''
  });

    /* icon iOS & splaschscreen */
  DocHead.addLink({
    rel: 'apple-touch-icon', type: 'image/png', href: ''
  });
  DocHead.addLink({
    rel: 'apple-touch-startup-image', type: 'image/png', href: ''
  });

    /* Right Hand Side Of Google */
  DocHead.addLdJsonScript({
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: '',
    url: '',
    logo: '',
    description: '',
    telephone: '0000000000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Strasbourg',
      addressRegion: 'Alsace',
      streetAddress: 'Rue'
    }
  });


}
