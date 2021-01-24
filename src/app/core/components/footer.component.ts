import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer">
            &copy;Sayobot 2017-{{ time }} by
            <a href="https://github.com/SoulDee">SoulDee</a>
        </footer>
    `,
    styles: [
        `
            .footer {
                height: 96px;
                line-height: 96px;
                text-align: center;
            }

            .footer a {
                text-shadow: 1px 1px 0px #eeeeee;
                text-decoration: none;
                color: #9e9e9e;
                font-weight: normal;
                font-style: normal;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
    time: number;

    ngOnInit() {
        this.time = new Date().getFullYear();
    }
}
