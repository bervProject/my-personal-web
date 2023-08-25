# My Personal Web

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/bervProject/my-personal-web/tree/master)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I2YXS8)

## Build Status

| CircleCI | Node - Github Action | Docker - Github Action | License | CodeQL | Codecov |
| :---: | :---: | :---: | :---: | :---: | :---: |
| [![CircleCI](https://circleci.com/gh/bervProject/my-personal-web.svg?style=svg)](https://circleci.com/gh/bervProject/my-personal-web) | [![Node CI](https://github.com/bervProject/my-personal-web/actions/workflows/nodejs.yml/badge.svg)](https://github.com/bervProject/my-personal-web/actions/workflows/nodejs.yml) | [![Docker](https://github.com/bervProject/my-personal-web/actions/workflows/docker.yml/badge.svg)](https://github.com/bervProject/my-personal-web/actions/workflows/docker.yml) | [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FbervProject%2Fmy-personal-web.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FbervProject%2Fmy-personal-web?ref=badge_shield) | [![CodeQL](https://github.com/bervProject/my-personal-web/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/bervProject/my-personal-web/actions/workflows/codeql-analysis.yml) | [![codecov](https://codecov.io/gh/bervProject/my-personal-web/branch/main/graph/badge.svg?token=GRGia1rHzf)](https://codecov.io/gh/bervProject/my-personal-web) |

## About

My Personal Web created by Bervianto Leo Pratama. Using Vue.js, Buefy & Bulma. Using Typecript as base script.

## Architecture

```mermaid
flowchart LR
    0[Database] --> A[API]
    A --> B[Frontend - Vue]
    A --> C[Frontend - Admin]
```

## Next Roadmap

- [x] Upgrade Vue.js
- [ ] Increate Unit Test (55% Coverage)
- [ ] Increate E2E Test (1-3 pages)

## Release Notes

See in [RELEASE.md](RELEASE.md)

## LICENSE

- The source code is licensed [MIT](http://opensource.org/licenses/mit-license.php).
- The website content is licensed [CC BY NC SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/).

```markdown
Copyright (c) 2018 Bervianto Leo Pratama

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## License Status

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FbervProject%2Fmy-personal-web.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FbervProject%2Fmy-personal-web?ref=badge_large)
