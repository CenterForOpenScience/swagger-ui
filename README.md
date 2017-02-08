### OSF API Documentation
The openapi specification and source code for the documenting the Open Science Framework API lives here.

#### For development:
- `npm install`
- `npm run build` (to build a new distribution under the dist/ folder)
- `npm run serve` (to serve the built result at localhost:8080)

#### OpenAPI Specification
- The openapi specification for the OSF API lives in [src/main/html/swagger.yaml](https://github.com/caseyrollins/swagger-ui/blob/master/src/main/html/swagger.yaml) and contains references to many YAML files in the [swagger-spec](https://github.com/caseyrollins/swagger-ui/tree/master/swagger-spec) directory.

  ##### Editing the OpenAPI Specification
  - As a general rule, the [swagger.yaml](https://github.com/caseyrollins/swagger-ui/blob/master/src/main/html/swagger.yaml) file should be kept **as minimal as possible**, meaning `$refs` to other YAML files should be utilized over inline endpoint and model definitions. 
  - Each collection of related endpoints is contained in it's own folder in the [swagger-spec](https://github.com/caseyrollins/swagger-ui/tree/master/swagger-spec) directory (i.e. [swagger-spec/preprints/](https://github.com/caseyrollins/swagger-ui/tree/master/swagger-spec/preprints)), with each unique API endpoint having it's own YAML file (i.e. [detail.yaml](https://github.com/caseyrollins/swagger-ui/blob/master/swagger-spec/preprints/detail.yaml) and [list.yaml](https://github.com/caseyrollins/swagger-ui/blob/master/swagger-spec/preprints/list.yaml) for `/preprints/` and `/preprints/{preprint_id}/`, respectively).
  - The specification should *always* conform to the official OpenAPI specification (v2.0), described in detail [here](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md).
