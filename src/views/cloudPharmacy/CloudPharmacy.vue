<template>
    <div>
        <el-container>
            <el-header class="border">
                <el-row type="flex" class="demo-avatar demo-basic" style="height: 100%" justify="end">
                    <el-col style="margin-top: 20px" :span="2">
                        历史配送
                    </el-col>
                    <el-col  style="margin-top: 20px" :span="2">
                        云药房信息
                    </el-col>
                    <el-col class="formRow" :span="1">
                        <el-image
                                style="width: 40px; height: 40px;border-radius: 50%"
                                :src="url"
                                fit="fit"></el-image>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside class="border minHeight" width="500px">
                    <el-row style="margin-top: 40px">
                        <el-col :span="22" :offset="1">
                            <el-card class="box-card">
                                <div slot="header">
                                    <el-row>
                                        <el-col :span="8">
                                            <span>订单列表</span>
                                        </el-col>
                                    </el-row>
                                </div>
                                <el-row style="margin-top: 20px">
                                    <el-col>
                                        <el-table style="width: 100%;">
                                            <el-table-column label="订单时间"></el-table-column>
                                            <el-table-column label="订单号"></el-table-column>
                                            <el-table-column label="配送地址"></el-table-column>
                                            <el-table-column label="收货人"></el-table-column>
                                            <el-table-column label="操作" fixed="right">
                                                <template slot-scope="scope">
                                                    <el-button  type="primary" size="small">确认预约</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main class="border">
                    <el-row style="margin-top: 20px">
                        <el-col :span="20" :offset="1">
                            <el-card class="box-card">
                                <div slot="header">
                                    <el-row>
                                        <el-col :span="2">
                                            配药
                                        </el-col>
                                    </el-row>
                                </div>
                                <el-row >
                                    <el-col :span="20" :offset="2">
                                        <el-form label-position="right" label-width="80px">
                                            <el-row>
                                                <el-col :span="8">
                                                    <el-form-item label="收货人">
                                                        <el-input value="村医或患者"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="10" :offset="2">
                                                    <el-form-item label="收货地址">
                                                        <el-input value="村医地址或者档案地址"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-form>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="20" :offset="2">
                                        <el-divider></el-divider>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 20px">
                                    <el-col :span="2" :offset="2">
                                        <span>处方</span>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" offset="2">
                                        <el-table
                                                :data="tableData"
                                                style="width: 100%;min-height: 180px"
                                                class="formBorder">
                                            <el-table-column
                                                    prop="num"
                                                    label="编号"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="name"
                                                    label="药物名称"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="norms"
                                                    label="规格">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="usage"
                                                    label="用量">
                                            </el-table-column>
                                        </el-table>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 50px">
                                    <el-col :span="4" :offset="4">
                                        <span>村医/下级医院</span>
                                    </el-col>
                                    <el-col :span="16">
                                        <el-form size="small" label-position="right" label-width="40px">
                                            <el-row>
                                                <el-col :span="12">
                                                    <el-form-item>
                                                        <el-input placeholder="请输入内容药品名称"  class="input-with-select">
                                                            <el-button slot="append" icon="el-icon-search"></el-button>
                                                        </el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-form>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: -10px">
                                    <el-col :span="20" offset="2">
                                        <el-table
                                                :data="tableData"
                                                style="width: 100%;min-height: 180px"
                                                class="formBorder">
                                            <el-table-column
                                                    prop="num"
                                                    label="编号"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="name"
                                                    label="药物名称"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="norms"
                                                    label="规格">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="usage"
                                                    label="用量">
                                            </el-table-column>
                                        </el-table>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 50px">
                                    <el-col :span="4" :offset="4">
                                        <span>云药房</span>
                                    </el-col>
                                    <el-col :span="16">
                                        <el-form size="small" label-position="right" label-width="40px">
                                            <el-row>
                                                <el-col :span="8">
                                                    <el-form-item>
                                                        <el-input placeholder="请输入内容药房名称"  class="input-with-select">
                                                        </el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="10">
                                                    <el-form-item>
                                                        <el-input placeholder="请输入内容药品名称"  class="input-with-select">
                                                            <el-button slot="append" icon="el-icon-search"></el-button>
                                                        </el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-form>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: -10px">
                                    <el-col :span="20" offset="2">
                                        <el-table
                                                :data="tableData"
                                                style="width: 100%;min-height: 180px"
                                                class="formBorder">
                                            <el-table-column
                                                    prop="num"
                                                    label="编号"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="name"
                                                    label="药物名称"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="norms"
                                                    label="规格">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="usage"
                                                    label="用量">
                                            </el-table-column>
                                        </el-table>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="20" :offset="2">
                                        <el-divider></el-divider>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col>
                                        <el-form  label-position="right" label-width="80px">
                                            <el-row class="formRow">
                                                <el-col :span="8" :offset="2">
                                                    <el-form-item label="订单时间">
                                                        <el-input disabled="true" value="2021/1/20"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="8" :offset="2">
                                                    <el-form-item label="配送时间">
                                                        <el-input  value="2021/1/20"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row class="formRow">
                                                <el-col :span="8" :offset="2">
                                                    <el-form-item label="服务机构">
                                                        <el-input disabled="true" value="省二医院"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="8" :offset="2">
                                                    <el-form-item label="配送机构">
                                                        <el-input  value="云药房名称"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row class="formRow">
                                                <el-col :span="8" :offset="2">
                                                    <el-form-item label="上级大夫">
                                                        <el-input disabled="true" value="刘大夫">
                                                        </el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row class="formRow">
                                                <el-col :span="4" :offset="8">
                                                    <el-form-item >
                                                        <el-button type="primary">确认订单</el-button>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="4">
                                                    <el-form-item >
                                                        <el-button >取消</el-button>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-form>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
	export default {
		name: "CloudPharmacy",
        data() {
			return {
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
	}
</script>

<style scoped>
    .border {
        border: 1px #e3eef9 solid;
    }
    .minHeight {
        min-height: 400px;
    }
    .formBorder{
        border: 1px rgba(0, 0, 0, 0.1) solid;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

    }
    .formRow{
        margin: 10px 0 0 ;
    }
</style>