/**
 *
 * Asynchronously loads the component for SwaggerWrapper
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
