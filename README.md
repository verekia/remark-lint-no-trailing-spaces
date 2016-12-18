# no-trailing-spaces external rule for [remark-lint](https://github.com/wooorm/remark-lint)

A remark-lint external rule to warn about any trailing or leading whitespace.

```
`·` represents ` `.

<!-- Invalid (3 warnings) -->

# Title··
··
·Hello world!

<!-- Valid -->

# Title

Hello world!

```
