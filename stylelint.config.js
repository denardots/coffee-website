export default {
  extends: "stylelint-config-standard",
  rules: {
    "no-unknown-animations": true,
    "no-unknown-custom-media": true,
    "no-unknown-custom-properties": true,
    "at-rule-property-required-list": {"font-face": ["font-display", "font-family", "font-style"]},
    "color-named": "never",
    "declaration-no-important": true,
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": "never",
    "at-rule-empty-line-before": "never",
    "rule-empty-line-before": "never",
    "font-family-name-quotes": "always-unless-keyword",
    "selector-class-pattern": null
  }
};