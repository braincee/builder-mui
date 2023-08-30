# CHANGES (from previous version)
- Builder SDK v1 => v2 (https://www.builder.io/c/docs/sdk-comparison)
- Prettier, Eslint => Rome
- React Icons => Feather
- Import the VS Code config I sent, it has everything set to not fuck things up again.

# STEPS
1. See what I added from MUI Joy Select by checking the API (https://mui.com/joy-ui/api/select)
2. After seeing the API check which props and what `types` were used in the component config
3. Do the same for the rest of components in `new` folder.
4. Check both in the API version (https://mui.com/joy-ui/api) and the simple version (https://mui.com/joy-ui/react-slider). Some props appear only in one place, it is your responsability to gather all.
5. Put all props in alphabetical order, same as they are in the api docs
6. After you FINISH, TEST (in builder) and FINALIZE (fixes, details) a component, you move it from the new folder to mui folder.


