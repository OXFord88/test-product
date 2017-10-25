

import Vue from 'vue';
import {
    Button,
    Card,
    Popover,
    DatePicker,
    Form,
    Select,
    Option,
    Input,
    Message,
    MessageBox,
    Table,
    TableColumn,
    Radio
} from 'element-ui';

import 'element-ui/lib/theme-default/index.css';

// 分别引入各个组件，减少build文件的大小
export default function elementui() {
    Vue.component(Button.name, Button);
    Vue.component(Card.name, Card);
    Vue.component(Popover.name, Popover);
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(Form.name, Form);
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option);
    Vue.component(Input.name, Input);
    Vue.component(Message.name, Message);
    Vue.component(MessageBox.name, MessageBox);
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Vue.component(Radio.name, Radio);

    Vue.prototype.$message = Message;
}
