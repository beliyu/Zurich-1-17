# Zurich app in early January 2017
## Dependencies
In the meantime arrived modules ...
* angular 2.4.1 - changes in the api > must use new webpack and NG2-redux
* webpack 2.2.0-rc.3, webpack-dev-server 2.2.0-rc.0 - transition from beta to RC
* ng2-redux 5.0.0 - changes regarding the new angular and aot
    * Minimum Angular is now 2.4.0
    * NgReduxModule.forRoot is no more : 

#### New Way:

```typescript
import ...
import { NgReduxModule } from 'ng2-redux';

@NgModule({
  imports: [
    NgReduxModule,
    ...Module,
  ],
  ...
})
class AppModule {
  // etc.
}
```
* typescript 2.0.10 - without any problems
* primeng 1.1.2 - many problems, components that operated now block 
    * DataTableModule completely collapsed ...
    * Currently developing ver.2 ;I do not expect fixes to ver.1.1.2 !
* codelyzer 2.0.0-beta.4  - duller than ever...
    * requires that each method/properties is public/private/...
    * often suggests to replace for-loop into for-of !!!

## AngularClass starter
Although still Ver 5.1.1 - changed the entire infrastructure. Adding aot required new tools
* new webpack has led to a completely new config folder
* no more vendor.ts list
* some webpack loaders have been replaced with new one
* in some modules still appear old (nonexistent) webpack 2.2.0-beta
* yarn has become mandatory - mission impossible with npm !!!

## Application itself
Carried out a probe to learn about new working environment. 
The development of applications continued at the old version.
In March we expect angular.4 and try again ...
