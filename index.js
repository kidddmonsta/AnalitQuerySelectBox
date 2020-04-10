$(function(){
    var dataGrid;

    var makeAsyncDataSource = function(jsonFile){
        return new DevExpress.data.CustomStore({
            loadMode: "raw",
            key: "ID",
            load: function() {
                return $.getJSON("data/" + jsonFile);
            }
        });
    };

    var getSelectedItemsKeys = function(items) {
        var result = [];
        items.forEach(function(item) {
            if(item.selected) {
                result.push(item.key);
            }
            if(item.items.length) {
                result = result.concat(getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };

    $("#select-indicator").dxSelectBox({
        displayExpr: "Indicator",
        dataSource: makeAsyncDataSource("customers.json"),
        value: "ID",
        /*onValueChanged: function(data) {
            form.option("formData", data.value);
        }*/
    });

    $("#Indicator").dxDropDownBox({
        value: [3],
        valueExpr: "ID",
        placeholder: "Select a value...",
        displayExpr: "Indicator",
        showClearButton: true,
        dataSource: makeAsyncDataSource("customers.json"),
        contentTemplate: function(e){
            var value = e.component.option("value"),
                $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["Indicator"],
                    hoverStateEnabled: true,
                    paging: { enabled: true, pageSize: 10 },
                    filterRow: { visible: true },
                    scrolling: { mode: "infinite" },
                    height: 345,
                    selection: { mode: "multiple" },
                    selectedRowKeys: value,
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys;
                        e.component.option("value", keys);
                    }
                });

            dataGrid = $dataGrid.dxDataGrid("instance");

            e.component.on("valueChanged", function(args){
                var value = args.value;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        }
    });

    $("#Time").dxDropDownBox({
        value: [3],
        valueExpr: "ID",
        placeholder: "Select a value...",
        displayExpr: "Time",
        showClearButton: true,
        dataSource: makeAsyncDataSource("customers.json"),
        contentTemplate: function(e){
            var value = e.component.option("value"),
                $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["Time"],
                    hoverStateEnabled: true,
                    paging: { enabled: true, pageSize: 10 },
                    filterRow: { visible: true },
                    scrolling: { mode: "infinite" },
                    height: 345,
                    selection: { mode: "multiple" },
                    selectedRowKeys: value,
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys;
                        e.component.option("value", keys);
                    }
                });

            dataGrid = $dataGrid.dxDataGrid("instance");

            e.component.on("valueChanged", function(args){
                var value = args.value;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        }
    });

    $("#Measures").dxDropDownBox({
        value: [3],
        valueExpr: "ID",
        placeholder: "Select a value...",
        displayExpr: "Measures",
        showClearButton: true,
        dataSource: makeAsyncDataSource("customers.json"),
        contentTemplate: function(e){
            var value = e.component.option("value"),
                $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["Measures"],
                    hoverStateEnabled: true,
                    paging: { enabled: true, pageSize: 10 },
                    filterRow: { visible: true },
                    scrolling: { mode: "infinite" },
                    height: 345,
                    selection: { mode: "multiple" },
                    selectedRowKeys: value,
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys;
                        e.component.option("value", keys);
                    }
                });

            dataGrid = $dataGrid.dxDataGrid("instance");

            e.component.on("valueChanged", function(args){
                var value = args.value;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        }
    });

    $("#Dimensions").dxDropDownBox({
        value: [3],
        valueExpr: "ID",
        placeholder: "Select a value...",
        displayExpr: "Dimensions",
        showClearButton: true,
        dataSource: makeAsyncDataSource("customers.json"),
        contentTemplate: function(e){
            var value = e.component.option("value"),
                $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["Dimensions"],
                    hoverStateEnabled: true,
                    paging: { enabled: true, pageSize: 10 },
                    filterRow: { visible: true },
                    scrolling: { mode: "infinite" },
                    height: 345,
                    selection: { mode: "multiple" },
                    selectedRowKeys: value,
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys;
                        e.component.option("value", keys);
                    }
                });

            dataGrid = $dataGrid.dxDataGrid("instance");

            e.component.on("valueChanged", function(args){
                var value = args.value;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        }
    });

    $("#Filters").dxDropDownBox({
        value: [3],
        valueExpr: "ID",
        placeholder: "Select a value...",
        displayExpr: "Indicator",
        showClearButton: true,
        dataSource: makeAsyncDataSource("customers.json"),
        contentTemplate: function(e){
            var value = e.component.option("value"),
                $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["Indicator", "Measures", "Dimensions"],
                    hoverStateEnabled: true,
                    paging: { enabled: true, pageSize: 10 },
                    filterRow: { visible: true },
                    scrolling: { mode: "infinite" },
                    height: 345,
                    selection: { mode: "multiple" },
                    selectedRowKeys: value,
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys;
                        e.component.option("value", keys);
                    }
                });

            dataGrid = $dataGrid.dxDataGrid("instance");

            e.component.on("valueChanged", function(args){
                var value = args.value;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        }
    });

    $("#Visualization").dxDropDownBox({
        value: [3],
        valueExpr: "ID",
        placeholder: "Select a value...",
        displayExpr: "Visualization",
        showClearButton: true,
        dataSource: makeAsyncDataSource("customers.json"),
        contentTemplate: function(e){
            var value = e.component.option("value"),
                $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["Visualization"],
                    hoverStateEnabled: true,
                    paging: { enabled: true, pageSize: 10 },
                    filterRow: { visible: true },
                    scrolling: { mode: "infinite" },
                    height: 345,
                    selection: { mode: "multiple" },
                    selectedRowKeys: value,
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys;
                        e.component.option("value", keys);
                    }
                });

            dataGrid = $dataGrid.dxDataGrid("instance");

            e.component.on("valueChanged", function(args){
                var value = args.value;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        }
    });

    $("#button").dxButton({
        text: "Preview",
        type: "success",
        useSubmitBehavior: true
    });

    /*$("#apply").dxButton({
        text: "Сохранить",
        type: "default",
        onClick: function() {
            var filter = $("#filterBuilder").dxFilterBuilder("instance").option("value");
            $("#dataGrid").dxDataGrid("instance").option("filterValue", filter);
        },
    });*/

});
