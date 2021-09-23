import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToolchainApiService} from '../core/services/toolchain-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [1, 2, 3, 4];

  result;

  data = `
{
    "nodes": [
        {
            "name": "Room_1",
            "type": "https: //ontology.hviidnet.com/2020/01/03/smartbuildingprivacyvunl.ttl#Room",
            "address": "https://ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#Room_1",
            "superType": "https://ontology.hviidnet.com/2020/01/03/privacyvunlV2.ttl#Context",
            "attributes": []
        },
        {
            "name": "CO2",
            "type": "https://ontology.hviidnet.com/2020/01/03/smartbuildingprivacyvunl.ttl#CO2",
            "address": "https://ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#CO2",
            "superType": "https://ontology.hviidnet.com/2020/01/03/privacyvunl.ttl#TimeSeries",
            "attributes": [
                {
                    "dataType": "int",
                    "name": "TemplateCount",
                    "value": ""
                },
                {
                    "dataType": "double",
                    "name": "TemporalResolution",
                    "value": "60"
                }
            ]
        }
    ],
    "links": [
        {
            "predicate": "https://ontology.hviidnet.com/2020/01/03/privacyvunlV2.ttl#has",
            "subject": "https://ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#Room_1",
            "object": "https://ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#CO2"
        }
    ],
    "namespace": "https: //ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#"
}
  `;


  constructor(private router: Router, private toolchainApiService: ToolchainApiService) {
  }

  ngOnInit(): void {
    this.toolchainApiService.postToolchain(this.data).subscribe(value => {
      console.log(value);
      return this.result = value.toString();
    });
    console.log('HomeComponent INIT');
  }

}
