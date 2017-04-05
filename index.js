import url from 'url';

const DEFAUL_OPTIONS = {
  target: '_blank',
  rel: 'nofollow noreferrer noopener'
};

/**
 * Defines link is internal.
 * @param host {String} Site hostname.
 * @param href {Object} Parsed url object.
 * @return {Boolean}
 */
const isInternal = (host, href) => {
  return href.host === host || (!href.protocol && !href.host && href.pathname);
};

const remarkableExtLink = (md, options) => {
  const config = Object.assign({}, DEFAUL_OPTIONS, options);

  // Parse and normalize hostname.
  config.host = url.parse(config.host).host;
  // Save original method to invoke.
  const originalRender = md.renderer.rules.link_open;

  md.renderer.rules.link_open = function() {
    let result;

    // Invoke original method first.
    result = originalRender.apply(null, arguments);

    let regexp = /href="([^"]*)"/;

    let href = url.parse(regexp.exec(result)[1]);

    if (!isInternal(config.host, href)) {
      result = result.replace('>', ` target="${config.target}" rel="${config.rel}">`);
    }

    return result;
  };
};

export default remarkableExtLink;
