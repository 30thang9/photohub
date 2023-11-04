import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Order1Service } from 'src/app/services/demo/order1.service';

@Component({
  selector: 'app-page-picture-refund',
  templateUrl: './page-picture-refund.component.html',
  styleUrls: ['./page-picture-refund.component.scss']
})
export class PagePictureRefundComponent {
  orderId!: number;
  order!: Order;
  isShowAskRepair: boolean = false;
  isDropdownOpen: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private orderService: Order1Service,
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.orderId = parseInt(id, 10);
      } else {
        console.error('ID not found in URL');
      }
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const id = params['id'];
      if (id) {
        const order_id = parseInt(id, 10);
        this.orderService.getOrderById(order_id)
          .then(order => {
            if (order !== null) {
              this.order = order;
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        console.error('ID not found in URL');
      }
    });
  }

  toggleAsk() {
    this.isShowAskRepair = !this.isShowAskRepair;
  }

  closeAsk() {
    this.isShowAskRepair = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
