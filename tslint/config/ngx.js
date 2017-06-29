const path = require('path');

module.exports = {
  extends: ['../config', 'codelyzer'],
  rulesDirectory: [
    path.dirname(require.resolve('codelyzer')),
  ],
  rules: {
    'angular-whitespace': [true, 'check-interpolation', 'check-pipe'],
    'banana-in-box': true,
    'templates-no-negated-async': true,
    'directive-selector': [true, 'attribute', 'pzl', 'camelCase'],
    'component-selector': [true, 'element', 'pzl', 'kebab-case'],
    'use-input-property-decorator': true,
    'use-output-property-decorator': true,
    'use-host-property-decorator': true,
    'use-view-encapsulation': true,
    'no-attribute-parameter-decorator': true,
    'no-input-rename': true,
    'no-output-rename': true,
    'no-forward-ref': true,
    'use-life-cycle-interface': true,
    'use-pipe-transform-interface': true,
    'use-pipe-decorator': true,
    'pipe-naming': [true, 'camelCase', 'pzl'],
    'pipe-impure': true,
    'component-class-suffix': true,
    'directive-class-suffix': true,
    'templates-use-public': true,
    'no-access-missing-member': true,
    'invoke-injectable': true,
    'template-to-ng-template': true,
    'no-unused-css': true,
  },
};
