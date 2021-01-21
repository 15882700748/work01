<template>
    <div>
        <el-container>
            <el-header class="border">
                <el-row type="flex" class="demo-avatar demo-basic" style="height: 100%" justify="end">
                    <el-col style="margin-top: 20px" :span="2">
                        历史查看
                    </el-col>
                    <el-col  style="margin-top: 20px" :span="2">
                        上级医生信息
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
                <el-aside v-if="tabName === '1'" width="500px" class="border minHeight">
                    <el-row style="margin-top: 30px">
                        <el-col :span="22" offset="1">
                            <el-card class="box-card" style="min-height: 400px">
                                <el-row>
                                    <el-col :span="22" offset="1">
                                        <el-card class="box-card" style="height: 400px">
                                            视频通话显示
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 30px">
                                    <el-col :span="22" :offset="1">
                                        <el-form label-width="40px" label-position="right">
                                            <el-row>
                                                <el-col>
                                                    <el-form-item size="small" label="">
                                                        <el-button type="primary">按钮一</el-button>
                                                        <el-button type="primary">按钮二</el-button>
                                                        <el-button type="primary">按钮三</el-button>
                                                        <el-button type="primary">按钮四</el-button>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-form>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col>
                                        <el-divider></el-divider>
                                    </el-col>
                                </el-row>
                                <el-row >
                                    <el-col :span="22" :offset="1">
                                        <el-card class="box-card">
                                            <div slot="header">
                                                <el-row>
                                                    <el-col :span="8">患者基本状况</el-col>
                                                </el-row>
                                            </div>
                                            <el-row>
                                                <el-col>
                                                    <el-form label-width="40px" >
                                                        <el-row>
                                                            <el-col :span="10">
                                                                <el-form-item label="姓名">
                                                                    <el-button type="text">XXXX</el-button>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :span="10">
                                                                <el-form-item label="年龄">
                                                                    <el-button type="text">XXXX</el-button>
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col >
                                                                <el-form-item label="症状">
                                                                    <el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col>
                                                                <el-link type="primary"> 查看更多详情</el-link>
                                                            </el-col>
                                                        </el-row>
                                                    </el-form>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '2'" width="500px" class="border minHeight">

                </el-aside>
                <el-aside v-else-if="tabName === '3'" width="500px" class="border minHeight"></el-aside>
                <el-aside v-else-if="tabName === '4'" width="500px" class="border minHeight"></el-aside>
                <el-aside v-else-if="tabName === '5'" width="500px" class="border minHeight"></el-aside>
                <el-aside v-else-if="tabName === '6'" width="500px" class="border minHeight"></el-aside>
                <el-aside v-else-if="tabName === '7'" width="500px" class="border minHeight"></el-aside>
                <el-main class="border minHeight">
                    <el-tabs @tab-click="handleTabsClick" value="1">
                        <el-tab-pane name="1" label="首页">
                            <el-row style="margin-top: 50px">
                                <el-col :span="22" :offset="1">
                                    <el-card class="box-card">
                                        <el-row>
                                            <el-col>
                                                <el-form size="small" label-position="right" label-width="100px">
                                                    <el-row>
                                                        <el-col :span="6">
                                                            <el-form-item label="选择查看类型">
                                                                <el-select value="问诊">
                                                                    <el-option value="问诊" label="问诊"></el-option>
                                                                    <el-option value="检查" label="检查"></el-option>
                                                                    <el-option value="预约" label="预约"></el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :span="3">
                                                            <el-form-item label="只看自己">
                                                                <el-switch v-model="onlySeeSelf"></el-switch>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                </el-form>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col>
                                                <el-divider></el-divider>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col>
                                                <el-table>

                                                </el-table>
                                            </el-col>
                                        </el-row>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane name="2" label="我的任务">
                            <el-tabs value="2.1" type="card">
                                <el-tab-pane name="2.1" label="待问诊列表">
                                    <el-row style="margin-top: 40px">
                                        <el-col :span="22" :offset="1">
                                            <el-card class="box-card">
                                                <div slot="header">
                                                    <el-row>
                                                        <el-col :span="2">
                                                            <strong>问诊列表</strong>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                                <el-row>
                                                    <el-col>
                                                        <el-table
                                                                :data="outpatientDepartmentTableData">
                                                            <el-table-column
                                                                    prop="num"
                                                                    label="序号">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="name"
                                                                    label="问诊人">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="doctorName"
                                                                    label="村医/下级医生">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="acceptDate"
                                                                    label="接受日期">
                                                            </el-table-column>
                                                            <el-table-column label="操作">
                                                                <template slot-scope="scope">
                                                                    <el-button size="small" type="primary">问诊</el-button>
                                                                    <el-button size="small" style="color: red">取消问诊</el-button>
                                                                </template>
                                                            </el-table-column>
                                                        </el-table>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                    <el-row style="margin-top: 30px">
                                        <el-col :span="22" :offset="1">
                                            <el-pagination
                                                    background
                                                    @current-change="handleCurrentChange"
                                                    :current-page="1"
                                                    :page-sizes="[10, 20, 30, 40]"
                                                    :page-size="100"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="400">
                                            </el-pagination>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane name="2.2" label="预约查看列表">
                                    <el-row style="margin-top: 40px">
                                        <el-col :span="22" offset="1">
                                            <el-card class="box-card">
                                                <div slot="header">
                                                    <el-row>
                                                        <el-col :span="2">
                                                            <strong>预约查看</strong>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                                <el-row>
                                                    <el-col>
                                                        <el-table
                                                                :data="orderTableData">
                                                            <el-table-column
                                                                    prop="num"
                                                                    label="序号">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="orderNum"
                                                                    label="预约号">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="name"
                                                                    label="预约人">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="doctorName"
                                                                    label="村医/下级医生">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="orderDate"
                                                                    label="预约时间">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="acceptDate"
                                                                    label="接受时间">
                                                            </el-table-column>

                                                            <el-table-column label="操作" >
                                                                <template slot-scope="scope">
                                                                    <el-button size="small" type="primary">查看详情</el-button>
                                                                </template>
                                                            </el-table-column>
                                                        </el-table>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                    <el-row style="margin-top: 30px">
                                        <el-col :span="22" :offset="1">
                                            <el-pagination
                                                    background
                                                    @current-change="handleCurrentChange"
                                                    :current-page="1"
                                                    :page-sizes="[10, 20, 30, 40]"
                                                    :page-size="100"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="400">
                                            </el-pagination>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane name="2.3" label="待检验列表">
                                    <el-row style="margin-top: 40px" >
                                        <el-col :span="22" offset="1">
                                            <el-card class="box-card">
                                                <div slot="header">
                                                    <el-row>
                                                        <el-col :span="3">
                                                            <strong>待检验查看</strong>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                                <el-row>
                                                    <el-col>
                                                        <el-table
                                                                :data="checkOutTableData">
                                                            <el-table-column
                                                                    prop="num"
                                                                    label="序号">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="checkOutNum"
                                                                    label="检验编号">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="name"
                                                                    label="申请人">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="doctorName"
                                                                    label="村医/下级医生">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="checkOutDate"
                                                                    label="最迟检验时间">
                                                            </el-table-column>
                                                            <el-table-column
                                                                    prop="acceptDate"
                                                                    label="接受时间">
                                                            </el-table-column>

                                                            <el-table-column label="操作" width="180">
                                                                <template slot-scope="scope">
                                                                    <el-button size="small" type="primary">查看详情</el-button>
                                                                    <el-button size="small" type="primary">检验</el-button>
                                                                </template>
                                                            </el-table-column>
                                                        </el-table>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                    <el-row style="margin-top: 30px">
                                        <el-col :span="22" :offset="1">
                                            <el-pagination
                                                    background
                                                    @current-change="handleCurrentChange"
                                                    :current-page="1"
                                                    :page-sizes="[10, 20, 30, 40]"
                                                    :page-size="100"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="400">
                                            </el-pagination>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                            </el-tabs>
                        </el-tab-pane>
                        <el-tab-pane name="3" label="问诊"></el-tab-pane>
                        <el-tab-pane name="4" label="检验检查"></el-tab-pane>
                        <el-tab-pane name="5" label="用药"></el-tab-pane>
                        <el-tab-pane name="6" label="问诊预约"></el-tab-pane>
                        <el-tab-pane name="7" label="配药"></el-tab-pane>
                    </el-tabs>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
	export default {
		name: "doctor",
        data(){
			return {
				tabName:'1',
				onlySeeSelf: false,
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				outpatientDepartmentTableData: [
                    {
                    	num: 1,
                        name: 'XXX',
						doctorName: 'YYY',
						acceptDate: '2021/1/20'
                    },
					{
						num: 2,
						name: 'XXX',
						doctorName: 'YYY',
						acceptDate: '2021/1/20'
					},
					{
						num: 3,
						name: 'XXX',
						doctorName: 'YYY',
						acceptDate: '2021/1/20'
					},
					{
						num: 4,
						name: 'XXX',
						doctorName: 'YYY',
						acceptDate: '2021/1/20'
					}
                ],
				orderTableData: [
					{
						num: 1,
                        orderNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
                        orderDate:'2021/1/20',
						acceptDate: '2021/1/19'
					},
					{
						num: 2,
						orderNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						orderDate:'2021/1/20',
						acceptDate: '2021/1/19'
					},
					{
						num: 3,
						orderNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						orderDate:'2021/1/20',
						acceptDate: '2021/1/19'
					},
					{
						num: 4,
						orderNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						orderDate:'2021/1/20',
						acceptDate: '2021/1/19'
					}
                ],
				checkOutTableData: [
					{
						num: 1,
						checkOutNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						checkOutDate:'2021/1/20',
						acceptDate: '2021/1/19'
					},
					{
						num: 2,
						checkOutNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						checkOutDate:'2021/1/20',
						acceptDate: '2021/1/19'
					},
					{
						num: 3,
						checkOutNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						checkOutDate:'2021/1/20',
						acceptDate: '2021/1/19'
					},
					{
						num: 4,
						checkOutNum: 'xxx',
						name: 'XXX',
						doctorName: 'YYY',
						checkOutDate:'2021/1/20',
						acceptDate: '2021/1/19'
					}
                ]
			}
        },
		methods : {
			handleTabsClick(tab, event){
				this.tabName = tab.name
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