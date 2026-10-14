# pizza-ci: a tiny project for learning CI with GitHub Actions

A small Node.js project with deliberate "traps". Everything is GREEN when students receive it.
They switch a trap on by removing `//`, and watch the pipeline react.

    npm ci            # install the tools (ESLint)
    npm run build     # can the computer read the code? (node --check)
    npm run lint      # is the code tidy? (ESLint)
    npm test          # are the answers right? (node --test)

## For the teacher: publish it as a template
1. Create a PUBLIC repository on GitHub and push this folder to it.
2. Repository Settings: tick "Template repository".
3. Students click "Use this template, Create a new repository" (a copy under their own account).
4. Do a dry run yourself first: in a copy, check that the Actions tab works.

Students create the workflow in the browser: Add file, Create new file, and the name
`.github/workflows/ci.yaml` (typing the slashes creates the folders).

## The workflow files: solutions/ (same text as in the slides)
| File | Exercise | Result |
|------|----------|--------|
| 01-hello.yaml | 1a  Hello, robot | green |
| 02-stages.yaml | 1b  four "pretend" stages | green, 4 steps |
| 03-fail-on-purpose.yaml | 1c  Test step fails on purpose | red at Test, Build and Package grey |
| 04-real-pipeline.yaml | 2a  the real pipeline (build + lint) | green |
| 05-add-test-step.yaml | 3A  adds the Test step | green (test 1 passes) |

## The scenario, step by step (every step was executed with the real commands)
| Step | What the student does | Result |
|------|----------------------|--------|
| 2b | In src/order.js remove the `//` of the EXERCISE 2 block, commit | RED at Build: SyntaxError (missing comma) |
| 2c | Add the comma: `receipt(name, prices)`, commit | Build green, RED at Lint (3 problems) |
| 2d | Fix the 3 lint problems (var, ==, unused variable), commit | green |
| 3A | Add the Test step (05-add-test-step.yaml), commit | green: test 1 passes |
| 3B | In test/price.test.js remove the `//` of the EXERCISE 3 block, commit | RED at Test (190 !== 180), Package skipped |
| 3C | Fix applyDiscount in src/price.js: `price - (price * percent) / 100`, commit | green |
| Bonus | Paste solutions/fixed-src/price.test.js.txt over test/price.test.js | green, 4 tests |

solutions/fixed-src/ has the fixed source files (order.js, price.js) and the bonus test file.
It is named .txt on purpose: a .test.js file inside solutions/ would be picked up by `npm test`.
