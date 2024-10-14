import { Component } from '@angular/core';

import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { AvgClickRateExampleComponent } from '../_examples/avg-click-rate-example/avg-click-rate-example.component';
import { AvgOpenRateExampleComponent } from '../_examples/avg-open-rate-example/avg-open-rate-example.component';
import {
  BankAccountCardExampleComponent
} from '../_examples/bank-account-card-example/bank-account-card-example.component';
import {
  BankCreditCardExampleComponent
} from '../_examples/bank-credit-card-example/bank-credit-card-example.component';
import { CurrentPlanExampleComponent } from '../_examples/current-plan-example/current-plan-example.component';
import {
  CustomerSatisfactionExampleComponent
} from '../_examples/customer-satisfaction-example/customer-satisfaction-example.component';
import { EventsExampleComponent } from '../_examples/events-example/events-example.component';
import { ExchangeExampleComponent } from '../_examples/exchange-example/exchange-example.component';
import { MyInvestmentsExampleComponent } from '../_examples/my-investments-example/my-investments-example.component';
import {
  PaymentInformationExampleComponent
} from '../_examples/payment-information-example/payment-information-example.component';
import {
  PurchasesByChannelsExampleComponent
} from '../_examples/purchases-by-channels-example/purchases-by-channels-example.component';
import { RecentActivityExampleComponent } from '../_examples/recent-activity-example/recent-activity-example.component';
import { SiteVisitorsExampleComponent } from '../_examples/site-visitors-example/site-visitors-example.component';
import {
  TasksInProgressExampleComponent
} from '../_examples/tasks-in-progress-example/tasks-in-progress-example.component';
import { TeamExampleComponent } from '../_examples/team-example/team-example.component';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    AvgClickRateExampleComponent,
    AvgOpenRateExampleComponent,
    BankAccountCardExampleComponent,
    BankCreditCardExampleComponent,
    CurrentPlanExampleComponent,
    CustomerSatisfactionExampleComponent,
    EventsExampleComponent,
    ExchangeExampleComponent,
    MyInvestmentsExampleComponent,
    PaymentInformationExampleComponent,
    PurchasesByChannelsExampleComponent,
    RecentActivityExampleComponent,
    SiteVisitorsExampleComponent,
    TasksInProgressExampleComponent,
    TeamExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
