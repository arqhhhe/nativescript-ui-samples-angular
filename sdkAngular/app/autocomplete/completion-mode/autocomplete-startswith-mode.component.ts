// >> angular-autocomplete-startswith-mode
import { Component, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-pro-ui/autocomplete";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-startswith-mode",
    templateUrl: "autocomplete-startswith-mode.component.html"
})
export class AutoCompleteStartsWithModeComponent {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor() {
        this.initDataItems();
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }
}
// << angular-autocomplete-startswith-mode
