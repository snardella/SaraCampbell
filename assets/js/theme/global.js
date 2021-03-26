import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import adminBar from './global/adminBar';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import rootsLoaded from './roots/global';

import SiteWideBanner from 'bigcommerce-sitewide-banners';

import objectFitImages from './global/object-fit-polyfill';

export default class Global extends PageManager {
    onReady() {
        const {
            channelId, cartId, productId, categoryId, secureBaseUrl, maintenanceModeSettings, adminBarLanguage, themeSettings,
        } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        if (themeSettings['show-admin-bar']) {
            adminBar(secureBaseUrl, channelId, maintenanceModeSettings, JSON.parse(adminBarLanguage), productId, categoryId);
        }
        loadingProgressBar();
        svgInjector();
        rootsLoaded();
        objectFitImages();
		const swb = new SiteWideBanner();
        swb.getBanners()
            .then(banners => {
                // On dashboard selected as Top of page
                //swb.addBanners({ banners: [banners.top[0]] });

                // On dashboard selected as Top of page
                //swb.addBanners({ place: 'bottom', banners: [banners.top[1]] });

                // On dashboard selected as Bottom of page
                swb.addBanners({ place: '.footer_page', banners: [banners.bottom[0]] });
            })
            .catch(error => console.error(error));
		
		
		const swb1 = new SiteWideBanner();
        swb1.getBanners()
            .then(banners => {
                // On dashboard selected as Top of page
                //swb1.addBanners({ banners: [banners.bottom[0]] });

                // On dashboard selected as Top of page
                //swb1.addBanners({ place: 'top', banners: [banners.bottom[1]] });

                // On dashboard selected as Bottom of page
                swb1.addBanners({ place: '.header-tag-inner', banners: [banners.top[0]] });
            })
            .catch(error => console.error(error));
    }
}
