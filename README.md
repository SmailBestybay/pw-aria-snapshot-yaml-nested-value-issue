# MRE for "Nested mappings are not allowed in compact mappings" error when used with regex

## Summary

Unable to use regex in aria snapshot when the value string has a colon char.

Example aria string:

```yaml
- paragraph: "Period: 11/24/2025 – 11/30/2029"  
```

Example regex attempt that throws the "Nested mappings are not allowed in compact mappings":

```yaml
- paragraph: /Period: \d{2}\/\d{2}\/\d{4} – \d{2}\/\d{2}\/\d{4}
```

How to escape the colon char or use the regex in this example?

## Install and run

1. Clone this repo
2. Install

    ```sh
    npm i
    npx playwright install --with-deps
    ```

3. Run the tests `npm run test`

## Initially reproduced with

- @playwright/test: 1.56.1
- Node: 22.15.1
