import type { Linter } from  "eslint";

declare const _default: {
  configs: {
    flat: {
      recommended: Linter.Config;
      common: Linter.Config;
      import: Linter.Config;
      sonarjs: Linter.Config;
      prettier: Linter.Config;
      react: Linter.Config;
      reactHooks: Linter.Config;
      reactRefresh: Linter.Config;
      jsxA11y: Linter.Config;
      testingLibrary: Linter.Config;
      promise: Linter.Config;
      unicorn: Linter.Config;
      perfectionist: Linter.Config;
      typescript: Linter.Config;
    };
    legacy: {
      recommended: Linter.Config;
      common: Linter.Config;
      import: Linter.Config;
      sonarjs: Linter.Config;
      prettier: Linter.Config;
      react: Linter.Config;
      promise: Linter.Config;
      unicorn: Linter.Config;
      perfectionist: Linter.Config;
      typescript: Linter.Config;
    }
  };

  rules: {
    flat: {
      recommended: Linter.RuleEntry;
      common: Linter.RuleEntry;
      import: Linter.RuleEntry;
      sonarjs: Linter.RuleEntry;
      react: Linter.RuleEntry;
      reactHooks: Linter.RuleEntry;
      reactRefresh: Linter.RuleEntry;
      promise: Linter.RuleEntry;
      unicorn: Linter.RuleEntry;
      perfectionist: Linter.RuleEntry;
      typescriptRules: Linter.RuleEntry;
    }
    legacy: {
      recommended: Linter.RuleEntry;
      common: Linter.RuleEntry;
      import: Linter.RuleEntry;
      sonarjs: Linter.RuleEntry;
      prettier: Linter.RuleEntry;
      react: Linter.RuleEntry;
      reactHooks: Linter.RuleEntry;
      reactRefresh: Linter.RuleEntry;
      promise: Linter.RuleEntry;
      unicorn: Linter.RuleEntry;
      perfectionist: Linter.RuleEntry;
      typescript: Linter.RuleEntry;
    };
  };
}

export = _default;
