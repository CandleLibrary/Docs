<!-- [README;API]:api -->
  
## CFW Repository Organization Pattern
CandleFW repositories follow a few patterns for organizing files and settings of configuration files:

- Source files are stored in ```repo_root/source/```

- TypeScript source files are stored in ```repo_root/source/typescript/```

- Hydrocarbon Grammar files ```*.hcg``` are stored in ```repo_root/source/grammar/```

- Documentation fragments are stored in the directory ```repo_root/source/doc_fragments/``` or any
subdirectory within

`tsconfig.json` files are configured with, but not limited to, the following settings:
```json
{
    "compileOnSave": true,
    "include": [ "./source/typescript/** /*"  ],
    "compilerOptions": {
        "baseUrl": "./",
        "module": "ESNext",
        "outDir": "./build/library",
        "declarationDir": "./build/types",
        "declaration": true,
        "skipLibCheck": true
    }
}
```
`package.json` files are configured with, but not limited to, the following settings:
```json
{
    "version": "Version will appear in readme and api.",
    "description": "Description will appear in the readme",
}
```