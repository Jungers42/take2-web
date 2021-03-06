import { NgModule                        } from '@angular/core';
import { BrowserModule                   } from '@angular/platform-browser';
import { FormsModule                     } from '@angular/forms';
import { HttpClientModule                } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FlexLayoutModule                } from '@angular/flex-layout';
import { BrowserAnimationsModule         } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment                 } from 'environments/environment';
import { ROUTES                      } from './app.routes';
import { APP_RESOLVER_PROVIDERS      } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { MaterialModule              } from './material.module';

import { AppComponent           } from './app.component';
import { AboutComponent         } from './about';
import { ActionsFilterComponent, ActionsListComponent } from './actions';
import { DashboardComponent     } from './dashboard';
import { ActivistGoalsComponent } from './activist';
import { HighlightHeroComponent } from './dashboard/highlight-hero.component';
import { HomeComponent          } from './home';
import { NavMainComponent       } from './+home';
import { NoContentComponent     } from './no-content';
import { SiteHeaderComponent    } from './+home';

import { DevModuleModule } from './+dev-module';

import '../styles/styles.scss';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        ActionsFilterComponent,
        ActionsListComponent,
        ActivistGoalsComponent,
        DashboardComponent,
        HighlightHeroComponent,
        HomeComponent,
        NavMainComponent,
        NoContentComponent,
        SiteHeaderComponent,
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        }),
        MaterialModule,
        FlexLayoutModule,

        /**
         * This section will import the `DevModuleModule` only in certain build types.
         * When the module is not imported it will get tree shaked.
         * This is a simple example, a big app should probably implement some logic
         */
        ...environment.showDevModule ? [DevModuleModule] : [],
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        environment.ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule { }
