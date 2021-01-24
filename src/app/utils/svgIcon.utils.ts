import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface SvgIcon {
    name: string;
    url: string;
}

const icon_base_url = '/assets/img/icon';

const Icon_Config: SvgIcon[] = [
    { name: 'favorite', url: '/favorite.svg' },
    { name: 'play-circle', url: '/play-circle.svg' },
    { name: 'play_arrow', url: '/ic_play_arrow_black_.svg' },
    { name: 'pause_black', url: '/pause_black.svg' },
    { name: 'search', url: '/search.svg' },
    { name: 'cloud-download', url: '/Download from the Cloud.svg' },
    { name: 'options', url: '/options.svg' },
    { name: 'qr_code_scanner', url: '/qr_code_scanner.svg' },
];

export const loadSvgIconResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    Icon_Config.forEach((icon: SvgIcon) => {
        ir.addSvgIcon(
            icon.name,
            ds.bypassSecurityTrustResourceUrl(icon_base_url + icon.url)
        );
    });
};
