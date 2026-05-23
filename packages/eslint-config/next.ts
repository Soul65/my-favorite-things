import pluginNext from '@next/eslint-plugin-next';
import { defineConfig, globalIgnores } from 'eslint/config';
import { config as reactConfig } from './react.ts';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nextJsConfig = defineConfig(
	reactConfig,
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
	]),
	pluginNext.configs.recommended,
	pluginNext.configs['core-web-vitals'],
);
