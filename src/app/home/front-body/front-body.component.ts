import { Component, OnInit } from '@angular/core';
import { ReposService } from '../../../services/repos/repos.service';

@Component({
  selector: 'app-front-body',
  templateUrl: './front-body.component.html',
  styleUrls: ['./front-body.component.css']
})
export class FrontBodyComponent implements OnInit {

  searchData:any;
  searchValue:string;
  searchType:string='All';
  searchLang:string='All';

  constructor(private _reposService:ReposService) { }

  ngOnInit(): void {
    this.getRepos( this.searchValue, this.searchType,this.searchLang='All');
  }
  onChangeSearch(){
    this.getRepos(this.searchValue,this.searchType,this.searchLang)
  }
  getRepos(value,type,lang){
    this._reposService.getRepos(value,type,lang)
        .subscribe(
          data => {
            this.searchData = data
          },
          error => {
            try {
            } catch (err) {
            }
          },

        );

  }
  onClearFilter(){
    this.searchValue='';
    this.searchType='All';
    this.searchLang='All';
    this.searchData=[];
    this.getRepos( this.searchValue, this.searchType,this.searchLang='All');

  }

}
