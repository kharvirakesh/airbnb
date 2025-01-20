module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
	  'type-enum': [
		2,
		'always',
		[
		  'feat', // New features
		  'fix', // Bug fixes
		  'chore', // Maintenance or setup
		  'docs', // Documentation changes
		  'style', // Styling only (white-space, formatting, missing semi-colons, etc.)
		  'refactor', // Refactoring existing code
		  'test', // Adding or fixing tests
		  'perf', // Performance improvements
		  'ci', // Continuous integration changes
		]
	  ],
	  'subject-case': [2, 'always', ['sentence-case', 'start-case']],
	  'scope-case': [2, 'always', 'lower-case']
	}
  };
  