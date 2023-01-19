# react-component-boilerplate
Simple boilerplate for building react components with Typescript, and Rollup.js

## How to Use?

After cloning the repo. Firstly alter the `package.json` to reflect your own project
and personal details. Then read over the existing files to give you an idea of how
components are exported and how the package is built.

## Create and export a new component

1. Create a directory like `src/components/MyNewComponent` (Or copy existing one as a template)
2. Inside that directory create _2_ files. `index.ts` and `MyNewComponent.tsx` (`.tsx` filename should reflect the parent directory)
3. Add the following line to `index.ts`

```typescript
export { default } from './MyNewComponent'
```

4. In the `.tsx` file, create an `interface` for the component props.
5. Then create a blank functional component that uses the interface

```typescript
export interface MyNewComponentProps {
  name: string
}

const MyNewComponent = (props: MyNewComponentProps) => {
  return (
    <>
      <p>Hello, {props.name}</p>
    </>
  )
}

```

6. Ensure this functional component is exported as `default`

```typescript
export default MyComponent
```
