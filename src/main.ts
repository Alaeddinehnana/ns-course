
import { AppModule } from './app/app.module';
import {platformNativeScript, runNativeScriptAngularApp} from "@nativescript/angular";

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

