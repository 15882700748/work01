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
                                <!--<el-row style="margin-top: 30px">-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-form label-width="40px" label-position="right">-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form-item size="small" label="">-->
                                                        <!--<el-button type="primary">按钮一</el-button>-->
                                                        <!--<el-button type="primary">按钮二</el-button>-->
                                                        <!--<el-button type="primary">按钮三</el-button>-->
                                                        <!--<el-button type="primary">按钮四</el-button>-->
                                                    <!--</el-form-item>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-form>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                    <!--<el-col>-->
                                        <!--<el-divider></el-divider>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-card class="box-card">-->
                                            <!--<div slot="header">-->
                                                <!--<el-row>-->
                                                    <!--<el-col :span="8">患者基本状况</el-col>-->
                                                <!--</el-row>-->
                                            <!--</div>-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form label-width="40px" >-->
                                                        <!--<el-row>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="姓名">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="年龄">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col >-->
                                                                <!--<el-form-item label="症状">-->
                                                                    <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col>-->
                                                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                    <!--</el-form>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '2'" width="500px" class="border minHeight">
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
                                <!--<el-row style="margin-top: 30px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-form label-width="40px" label-position="right">-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form-item size="small" label="">-->
                                <!--<el-button type="primary">按钮一</el-button>-->
                                <!--<el-button type="primary">按钮二</el-button>-->
                                <!--<el-button type="primary">按钮三</el-button>-->
                                <!--<el-button type="primary">按钮四</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-divider></el-divider>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                <!--<el-row>-->
                                <!--<el-col :span="8">患者基本状况</el-col>-->
                                <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form label-width="40px" >-->
                                <!--<el-row>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="姓名">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="年龄">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col >-->
                                <!--<el-form-item label="症状">-->
                                <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-card>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                    <!--<el-row style="margin-top: 30px">-->
                        <!--<el-col :span="22" offset="1">-->
                            <!--<el-card class="box-card" style="min-height: 400px">-->
                                <!--<el-row>-->
                                    <!--<el-col :span="22" offset="1">-->
                                        <!--<el-card class="box-card" style="height: 400px">-->
                                            <!--视频通话显示-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row style="margin-top: 30px">-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-form label-width="40px" label-position="right">-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form-item size="small" label="">-->
                                                        <!--<el-button type="primary">按钮一</el-button>-->
                                                        <!--<el-button type="primary">按钮二</el-button>-->
                                                        <!--<el-button type="primary">按钮三</el-button>-->
                                                        <!--<el-button type="primary">按钮四</el-button>-->
                                                    <!--</el-form-item>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-form>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                    <!--<el-col>-->
                                        <!--<el-divider></el-divider>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-card class="box-card">-->
                                            <!--<div slot="header">-->
                                                <!--<el-row>-->
                                                    <!--<el-col :span="8">患者基本状况</el-col>-->
                                                <!--</el-row>-->
                                            <!--</div>-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form label-width="40px" >-->
                                                        <!--<el-row>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="姓名">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="年龄">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col >-->
                                                                <!--<el-form-item label="症状">-->
                                                                    <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col>-->
                                                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                    <!--</el-form>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            <!--</el-card>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                </el-aside>
                <el-aside v-else-if="tabName === '3'" width="500px" class="border minHeight">
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
                                <!--<el-row style="margin-top: 30px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-form label-width="40px" label-position="right">-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form-item size="small" label="">-->
                                <!--<el-button type="primary">按钮一</el-button>-->
                                <!--<el-button type="primary">按钮二</el-button>-->
                                <!--<el-button type="primary">按钮三</el-button>-->
                                <!--<el-button type="primary">按钮四</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-divider></el-divider>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                <!--<el-row>-->
                                <!--<el-col :span="8">患者基本状况</el-col>-->
                                <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form label-width="40px" >-->
                                <!--<el-row>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="姓名">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="年龄">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col >-->
                                <!--<el-form-item label="症状">-->
                                <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-card>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '4'" width="500px" class="border minHeight">
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
                                <!--<el-row style="margin-top: 30px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-form label-width="40px" label-position="right">-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form-item size="small" label="">-->
                                <!--<el-button type="primary">按钮一</el-button>-->
                                <!--<el-button type="primary">按钮二</el-button>-->
                                <!--<el-button type="primary">按钮三</el-button>-->
                                <!--<el-button type="primary">按钮四</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-divider></el-divider>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                <!--<el-row>-->
                                <!--<el-col :span="8">患者基本状况</el-col>-->
                                <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form label-width="40px" >-->
                                <!--<el-row>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="姓名">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="年龄">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col >-->
                                <!--<el-form-item label="症状">-->
                                <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-card>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                    <!--<el-row style="margin-top: 30px">-->
                        <!--<el-col :span="22" offset="1">-->
                            <!--<el-card class="box-card" style="min-height: 400px">-->
                                <!--<el-row>-->
                                    <!--<el-col :span="22" offset="1">-->
                                        <!--<el-card class="box-card" style="height: 400px">-->
                                            <!--视频通话显示-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row style="margin-top: 30px">-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-form label-width="40px" label-position="right">-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form-item size="small" label="">-->
                                                        <!--<el-button type="primary">按钮一</el-button>-->
                                                        <!--<el-button type="primary">按钮二</el-button>-->
                                                        <!--<el-button type="primary">按钮三</el-button>-->
                                                        <!--<el-button type="primary">按钮四</el-button>-->
                                                    <!--</el-form-item>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-form>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                    <!--<el-col>-->
                                        <!--<el-divider></el-divider>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-card class="box-card">-->
                                            <!--<div slot="header">-->
                                                <!--<el-row>-->
                                                    <!--<el-col :span="8">患者基本状况</el-col>-->
                                                <!--</el-row>-->
                                            <!--</div>-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form label-width="40px" >-->
                                                        <!--<el-row>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="姓名">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="年龄">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col >-->
                                                                <!--<el-form-item label="症状">-->
                                                                    <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col>-->
                                                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                    <!--</el-form>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            <!--</el-card>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                </el-aside>
                <el-aside v-else-if="tabName === '5'" width="500px" class="border minHeight">
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
                                <!--<el-row style="margin-top: 30px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-form label-width="40px" label-position="right">-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form-item size="small" label="">-->
                                <!--<el-button type="primary">按钮一</el-button>-->
                                <!--<el-button type="primary">按钮二</el-button>-->
                                <!--<el-button type="primary">按钮三</el-button>-->
                                <!--<el-button type="primary">按钮四</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-divider></el-divider>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                <!--<el-row>-->
                                <!--<el-col :span="8">患者基本状况</el-col>-->
                                <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form label-width="40px" >-->
                                <!--<el-row>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="姓名">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="年龄">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col >-->
                                <!--<el-form-item label="症状">-->
                                <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-card>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                    <!--<el-row style="margin-top: 30px">-->
                        <!--<el-col :span="22" offset="1">-->
                            <!--<el-card class="box-card" style="min-height: 400px">-->
                                <!--<el-row>-->
                                    <!--<el-col :span="22" offset="1">-->
                                        <!--<el-card class="box-card" style="height: 400px">-->
                                            <!--视频通话显示-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row style="margin-top: 30px">-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-form label-width="40px" label-position="right">-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form-item size="small" label="">-->
                                                        <!--<el-button type="primary">按钮一</el-button>-->
                                                        <!--<el-button type="primary">按钮二</el-button>-->
                                                        <!--<el-button type="primary">按钮三</el-button>-->
                                                        <!--<el-button type="primary">按钮四</el-button>-->
                                                    <!--</el-form-item>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-form>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                    <!--<el-col>-->
                                        <!--<el-divider></el-divider>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-card class="box-card">-->
                                            <!--<div slot="header">-->
                                                <!--<el-row>-->
                                                    <!--<el-col :span="8">患者基本状况</el-col>-->
                                                <!--</el-row>-->
                                            <!--</div>-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form label-width="40px" >-->
                                                        <!--<el-row>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="姓名">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="年龄">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col >-->
                                                                <!--<el-form-item label="症状">-->
                                                                    <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col>-->
                                                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                    <!--</el-form>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            <!--</el-card>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                </el-aside>
                <el-aside v-else-if="tabName === '6'" width="500px" class="border minHeight">
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
                                <!--<el-row style="margin-top: 30px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-form label-width="40px" label-position="right">-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form-item size="small" label="">-->
                                <!--<el-button type="primary">按钮一</el-button>-->
                                <!--<el-button type="primary">按钮二</el-button>-->
                                <!--<el-button type="primary">按钮三</el-button>-->
                                <!--<el-button type="primary">按钮四</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-divider></el-divider>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                <!--<el-row>-->
                                <!--<el-col :span="8">患者基本状况</el-col>-->
                                <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form label-width="40px" >-->
                                <!--<el-row>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="姓名">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="年龄">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col >-->
                                <!--<el-form-item label="症状">-->
                                <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-card>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                    <!--<el-row style="margin-top: 30px">-->
                        <!--<el-col :span="22" offset="1">-->
                            <!--<el-card class="box-card" style="min-height: 400px">-->
                                <!--<el-row>-->
                                    <!--<el-col :span="22" offset="1">-->
                                        <!--<el-card class="box-card" style="height: 400px">-->
                                            <!--视频通话显示-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row style="margin-top: 30px">-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-form label-width="40px" label-position="right">-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form-item size="small" label="">-->
                                                        <!--<el-button type="primary">按钮一</el-button>-->
                                                        <!--<el-button type="primary">按钮二</el-button>-->
                                                        <!--<el-button type="primary">按钮三</el-button>-->
                                                        <!--<el-button type="primary">按钮四</el-button>-->
                                                    <!--</el-form-item>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-form>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                    <!--<el-col>-->
                                        <!--<el-divider></el-divider>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                    <!--<el-col :span="22" :offset="1">-->
                                        <!--<el-card class="box-card">-->
                                            <!--<div slot="header">-->
                                                <!--<el-row>-->
                                                    <!--<el-col :span="8">患者基本状况</el-col>-->
                                                <!--</el-row>-->
                                            <!--</div>-->
                                            <!--<el-row>-->
                                                <!--<el-col>-->
                                                    <!--<el-form label-width="40px" >-->
                                                        <!--<el-row>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="姓名">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                            <!--<el-col :span="10">-->
                                                                <!--<el-form-item label="年龄">-->
                                                                    <!--<el-button type="text">XXXX</el-button>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col >-->
                                                                <!--<el-form-item label="症状">-->
                                                                    <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                                                <!--</el-form-item>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                        <!--<el-row>-->
                                                            <!--<el-col>-->
                                                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                                            <!--</el-col>-->
                                                        <!--</el-row>-->
                                                    <!--</el-form>-->
                                                <!--</el-col>-->
                                            <!--</el-row>-->
                                        <!--</el-card>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            <!--</el-card>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                </el-aside>
                <el-aside v-else-if="tabName === '7'" width="500px" class="border minHeight">
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
                                <!--<el-row style="margin-top: 30px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-form label-width="40px" label-position="right">-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form-item size="small" label="">-->
                                <!--<el-button type="primary">按钮一</el-button>-->
                                <!--<el-button type="primary">按钮二</el-button>-->
                                <!--<el-button type="primary">按钮三</el-button>-->
                                <!--<el-button type="primary">按钮四</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-divider></el-divider>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row >-->
                                <!--<el-col :span="22" :offset="1">-->
                                <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                <!--<el-row>-->
                                <!--<el-col :span="8">患者基本状况</el-col>-->
                                <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-form label-width="40px" >-->
                                <!--<el-row>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="姓名">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-col :span="10">-->
                                <!--<el-form-item label="年龄">-->
                                <!--<el-button type="text">XXXX</el-button>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col >-->
                                <!--<el-form-item label="症状">-->
                                <!--<el-input type="textarea" :autosize="{minRows:8,MaxRows:12}"></el-input>-->
                                <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--<el-row>-->
                                <!--<el-col>-->
                                <!--<el-link type="primary"> 查看更多详情</el-link>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-form>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                                <!--</el-card>-->
                                <!--</el-col>-->
                                <!--</el-row>-->
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 40px">
                        <el-col :span="20" offset="2">
                            <el-form ref="form2"   label-width="100px" class="formBorder" style="min-height:200px">
                                <el-row style="margin-top: 40px">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="上级医院医生">
                                            <el-input value="刘医生"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="20" :offset="2">
                                        <el-form-item label="服务机构">
                                            <el-input  disabled="true" value="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" :offset="4">
                                        <el-form-item>
                                            <el-button type="primary">上线</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-col>
                    </el-row>
                    <!--<el-row style="margin-top: 40px">-->
                        <!--<el-col :span="22" :offset="1">-->
                            <!--<el-card class="box-card">-->
                                <!--<div slot="header">-->
                                    <!--<el-row>-->
                                        <!--<el-col :span="8">-->
                                            <!--<span>预约列表</span>-->
                                        <!--</el-col>-->
                                        <!--<el-col :span="8" :offset="8">-->
                                            <!--<el-button size="small" type="primary">一键确认预约</el-button>-->
                                        <!--</el-col>-->
                                    <!--</el-row>-->
                                <!--</div>-->
                                <!--<el-row style="margin-top: 20px">-->
                                    <!--<el-col>-->
                                        <!--<el-table style="width: 100%;">-->
                                            <!--<el-table-column label="制单时间"></el-table-column>-->
                                            <!--<el-table-column label="当值医生"></el-table-column>-->
                                            <!--<el-table-column label="预约医院"></el-table-column>-->
                                            <!--<el-table-column label="预约医生"></el-table-column>-->
                                            <!--<el-table-column label="操作" fixed="right">-->
                                                <!--<template slot-scope="scope">-->
                                                    <!--<el-button  type="primary" size="small">确认预约</el-button>-->
                                                <!--</template>-->
                                            <!--</el-table-column>-->
                                        <!--</el-table>-->
                                    <!--</el-col>-->
                                <!--</el-row>-->
                            <!--</el-card>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                </el-aside>
                <el-main class="border minHeight">
                    <el-tabs @tab-click="handleTabsClick" value="1">
                        <el-tab-pane name="1" label="首页">
                            <el-tabs value="1.1">
                                <el-tab-pane name="1.1" label="已预约列表">
                                    <el-row style="margin-top: 40px">
                                        <el-col :span="22" :offset="1">
                                            <el-card class="box-card">
                                                <div slot="header">
                                                    <el-row>
                                                        <el-col :span="3">
                                                            <span>已预约列表</span>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                                <el-row style="margin-top: 20px">
                                                    <el-col>
                                                        <el-table style="width: 100%;">
                                                            <el-table-column label="预约时间"></el-table-column>
                                                            <el-table-column label="患者姓名"></el-table-column>
                                                            <el-table-column label="预约号"></el-table-column>
                                                            <el-table-column label="操作" fixed="right">
                                                                <template slot-scope="scope">
                                                                    <el-button  type="primary" size="small">查看详情</el-button>
                                                                </template>
                                                            </el-table-column>
                                                        </el-table>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane name="1.2" label="我的任务">
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
                            </el-tabs>
                            <!--<el-row style="margin-top: 50px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                    <!--<el-card class="box-card">-->
                                        <!--<el-row>-->
                                            <!--<el-col>-->
                                                <!--<el-form size="small" label-position="right" label-width="100px">-->
                                                    <!--<el-row>-->
                                                        <!--<el-col :span="6">-->
                                                            <!--<el-form-item label="选择查看类型">-->
                                                                <!--<el-select value="问诊">-->
                                                                    <!--<el-option value="问诊" label="问诊"></el-option>-->
                                                                    <!--<el-option value="检查" label="检查"></el-option>-->
                                                                    <!--<el-option value="预约" label="预约"></el-option>-->
                                                                <!--</el-select>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                        <!--<el-col :span="3">-->
                                                            <!--<el-form-item label="只看自己">-->
                                                                <!--<el-switch v-model="onlySeeSelf"></el-switch>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                <!--</el-form>-->
                                            <!--</el-col>-->
                                        <!--</el-row>-->
                                        <!--<el-row>-->
                                            <!--<el-col>-->
                                                <!--<el-divider></el-divider>-->
                                            <!--</el-col>-->
                                        <!--</el-row>-->
                                        <!--<el-row>-->
                                            <!--<el-col>-->
                                                <!--<el-table>-->

                                                <!--</el-table>-->
                                            <!--</el-col>-->
                                        <!--</el-row>-->
                                    <!--</el-card>-->
                                <!--</el-col>-->
                            <!--</el-row>-->
                        </el-tab-pane>
                        <el-tab-pane name="2" label="档案信息">
                            <el-form ref="form" size="small"  label-width="80px" class="formBorder" style="min-height:600px">
                                <el-row class="formRow">
                                    <el-col :span="9">
                                        <el-form-item label="健康卡号">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item>
                                            <el-button type="primary" >读身份证卡</el-button>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="卡类型">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="12">
                                        <el-form-item label="档案号">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="建档日期">
                                            <el-date-picker
                                                    align="right"
                                                    type="date"
                                                    placeholder="选择建档日期"
                                                    :picker-options="pickerOptions">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="8">
                                        <el-form-item label="姓名">
                                            <el-input  aria-required="true"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="性别">
                                            <el-select  placeholder="请选择性别">
                                                <el-option label="男" value="男"></el-option>
                                                <el-option label="女" value="女"></el-option>

                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="出生年月">
                                            <el-date-picker
                                                    align="right"
                                                    type="date"
                                                    placeholder="选择出生年月"
                                                    :picker-options="pickerOptions">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="15">
                                        <el-form-item label="户口地址">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="联系电话">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="7">
                                        <el-form-item label="婚姻状况">
                                            <el-select  placeholder="请选择婚姻状况">
                                                <el-option label="已婚" value="已婚"></el-option>
                                                <el-option label="未婚" value="未婚"></el-option>
                                                <el-option label="其他" value="其他"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="国籍">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="民族">
                                            <el-input ></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="7">
                                        <el-form-item label="证件名称">
                                            <el-select  placeholder="请选择证件名称">
                                                <el-option label="身份证" value="身份证"></el-option>
                                                <el-option label="其他" value="其他"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="10">
                                        <el-form-item label="证件号">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item label="区域">
                                            <el-select  placeholder="区域">
                                                <el-option label="区域一" value="区域一"></el-option>
                                                <el-option label="区域二" value="区域二"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="7">
                                        <el-form-item label="社保类型">
                                            <el-select  placeholder="选择社保类型">
                                                <el-option label="类型一" value="类型一"></el-option>
                                                <el-option label="类型二" value="类型二"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="职业">
                                            <el-select  placeholder="选择职业">
                                                <el-option label="职业一" value="职业一"></el-option>
                                                <el-option label="职业二" value="职业二"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="单位号码">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="15">
                                        <el-form-item label="工作单位">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="单位邮编">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="7">
                                        <el-form-item label="监护人">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="关系">
                                            <el-select  placeholder="选择关系">
                                                <el-option label="关系一" value="关系一"></el-option>
                                                <el-option label="关系二" value="关系二"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="联系电话">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="22">
                                        <el-form-item label="过敏史">
                                            <el-input type="textarea" ></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="7">
                                        <el-form-item label="血型">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="业务人员">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="来源类型">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="11">
                                        <el-form-item label="具体来源">
                                            <el-input></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="11">
                                        <el-form-item label="就诊类型">
                                            <el-select  placeholder="选择就诊类型">
                                                <el-option label="就诊类型一" value="就诊类型一"></el-option>
                                                <el-option label="就诊类型二" value="就诊类型二"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="8">
                                        <el-form-item>
                                            <el-button type="primary">确认档案</el-button>
                                            <el-button >重置</el-button>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="14">
                                        <el-form-item>
                                            <el-button type="primary">选择打印</el-button>
                                            <el-button type="primary">设计押金单</el-button>
                                        </el-form-item>

                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane name="3" label="挂号">
                            <el-row class="formRow">
                                <el-col>
                                    <el-tabs value="症状信息" type="border-card" >
                                        <el-tab-pane label="症状信息" name="症状信息">
                                            <el-form  ref="form" size="small" label-position="right"  label-width="80px" class=" formRow" style="min-height:600px">
                                                <!--<el-row class="formRow">-->
                                                <!--<el-col :span="8">-->
                                                <!--<el-form-item label="卡号">-->
                                                <!--<el-input placeholder="请输入卡号" >-->
                                                <!--<template slot="append">-->
                                                <!--<el-button type="primary">读卡</el-button>-->
                                                <!--</template>-->
                                                <!--</el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--<el-col :span="14">-->
                                                <!--<el-form-item label="活动时间" required>-->
                                                <!--<el-col :span="11">-->
                                                <!--<el-form-item prop="date1">-->
                                                <!--<el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--<el-col class="line" :span="2">-</el-col>-->
                                                <!--<el-col :span="11">-->
                                                <!--<el-form-item prop="date2">-->
                                                <!--<el-time-picker placeholder="选择时间"  style="width: 100%;"></el-time-picker>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                <!--<el-col :span="8">-->
                                                <!--<el-form-item label="病人姓名">-->
                                                <!--<el-input value="XXX" disabled="true"></el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--<el-col :span="4">-->
                                                <!--<el-form-item label="性别">-->
                                                <!--<el-input value="男" disabled="true"></el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--<el-col :span="7">-->
                                                <!--<el-form-item label="性别">-->
                                                <!--<el-date-picker type="date" placeholder="选择日期" value="yyyy-mm-dd"  style="width: 100%;" disabled=""></el-date-picker>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                <!--<el-col :span="22">-->
                                                <!--<el-form-item label="地址">-->
                                                <!--<el-input value="XX省XX市XX县XX镇XX村" disabled="true"></el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                <!--<el-col :span="15">-->
                                                <!--<el-form-item label="身份证号">-->
                                                <!--<el-input disabled="true" value="513728199302202387"></el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--<el-col :span="4" :offset="3">-->
                                                <!--<el-form-item label="婚姻">-->
                                                <!--<el-input disabled="true" value="已婚"></el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                <!--<el-col :span="22">-->
                                                <!--<el-form-item label="联系方式">-->
                                                <!--<el-input value="13672893202" ></el-input>-->
                                                <!--</el-form-item>-->
                                                <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--分段-->
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="挂号医生">
                                                            <el-select placeholder="请选择挂号医生" value="刘医生">
                                                                <el-option value="挂号医生一" label="挂号医生一"></el-option>
                                                                <el-option value="挂号医生二" label="挂号医生二"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <el-form-item label="挂号科室">
                                                            <el-select placeholder="请选择挂号科室" value="挂号科室一">
                                                                <el-option value="挂号科室一" label="挂号科室一"></el-option>
                                                                <el-option value="挂号科室二" label="挂号科室二"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="医生职称">
                                                            <el-select placeholder="请选择医生职称" value="主任医师">
                                                                <el-option value="医生职称一" label="医生职称一"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <el-form-item label="挂号类别">
                                                            <el-select placeholder="请选择挂号类别" value="类别一">
                                                                <el-option value="类别一" label="类别一"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="医院">
                                                            <el-select placeholder="请选择医院" value="省二医院">
                                                                <el-option value="医院一" label="医院一"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <el-form-item label="是否复诊">
                                                            <el-radio-group >
                                                                <el-radio :label="3">是</el-radio>
                                                                <el-radio :label="6">否</el-radio>
                                                            </el-radio-group>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="22">
                                                        <el-form-item label="手写内容">
                                                            <el-image :src="url"></el-image>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="4" :offset="8">
                                                        <el-form-item >
                                                            <el-button type="primary"> 提交</el-button>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-form-item >
                                                            <el-button > 重置</el-button>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane name="4" label="问诊">
                            <!--<el-row>-->
                                <!--<el-col>-->
                                    <!--<el-tabs value="问诊信息" type="border-card" >-->
                                        <!--<el-tab-pane label="问诊信息" name="问诊信息">-->
                                            <!--<el-form  size="small" label-position="right"    class="formRow" style="min-height:100px">-->
                                                <!--<el-row class="formRow">-->
                                                    <!--<el-col :span="22" :offset="1" >-->
                                                        <!--<el-form-item>-->
                                                            <!--<el-input  value="诊断" type="textarea" :autosize="{minRows:8,MaxRows:12}" aria-placeholder="诊断"></el-input>-->
                                                        <!--</el-form-item>-->
                                                    <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                    <!--<el-col :span="22" :offset="1" >-->
                                                        <!--<el-form-item>-->
                                                            <!--<el-input  value="临床" type="textarea" :autosize="{minRows:8,MaxRows:12}" aria-placeholder="临床"></el-input>-->
                                                        <!--</el-form-item>-->
                                                    <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                    <!--<el-col :span="22" :offset="1" >-->
                                                        <!--<el-form-item>-->
                                                            <!--<el-input  value="意见" type="textarea" :autosize="{minRows:8,MaxRows:12}" aria-placeholder="意见"></el-input>-->
                                                        <!--</el-form-item>-->
                                                    <!--</el-col>-->
                                                <!--</el-row>-->
                                                <!--<el-row class="formRow">-->
                                                    <!--<el-col :span="8" :offset="4">-->
                                                        <!--<el-form-item>-->
                                                            <!--<el-button type="primary">保存信息</el-button>-->
                                                        <!--</el-form-item>-->
                                                    <!--</el-col>-->
                                                    <!--<el-col :span="8" >-->
                                                        <!--<el-form-item>-->
                                                            <!--<el-button >重置</el-button>-->
                                                        <!--</el-form-item>-->
                                                    <!--</el-col>-->
                                                <!--</el-row>-->
                                            <!--</el-form>-->
                                        <!--</el-tab-pane>-->
                                    <!--</el-tabs>-->

                                <!--</el-col>-->
                            <!--</el-row>-->
                            <el-row>
                                <el-col>
                                    <el-tabs value="问诊信息" type="border-card" >
                                        <el-tab-pane label="问诊信息" name="问诊信息">
                                            <el-form  size="small" label-position="right"    class="formRow" style="min-height:100px">
                                                <el-row class="formRow">
                                                    <el-col :span="22" :offset="1" >
                                                        <el-form-item>
                                                            <el-input  value="诊断" type="textarea" :autosize="{minRows:8,MaxRows:12}" aria-placeholder="诊断"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="22" :offset="1" >
                                                        <el-form-item>
                                                            <el-input  value="临床" type="textarea" :autosize="{minRows:8,MaxRows:12}" aria-placeholder="临床"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="22" :offset="1" >
                                                        <el-form-item>
                                                            <el-input  value="意见" type="textarea" :autosize="{minRows:8,MaxRows:12}" aria-placeholder="意见"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8" :offset="2">
                                                        <el-form-item label="问诊时间">
                                                            <el-input disabled="true" value="2021/1/20"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8" :offset="4">
                                                        <el-form-item label="服务机构">
                                                            <el-input disabled="true" value="省二医院"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8" :offset="2">
                                                        <el-form-item label="上级医院医生">
                                                            <el-input disabled="true" value="刘医生"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8" :offset="4">
                                                        <el-form-item>
                                                            <el-button type="primary">保存信息</el-button>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8" >
                                                        <el-form-item>
                                                            <el-button >重置</el-button>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row>
                                <el-col>
                                    <el-tabs value="信息查看" type="border-card" >
                                        <el-tab-pane label="信息查看" name="信息查看">
                                            <el-form  label-position="right" label-width="80px"   class="formBorder formRow" style="min-height:100px">
                                                <el-row class="formRow">
                                                    <!--<el-col :span="8" :offset="2">-->
                                                        <!--<el-form-item label="问诊时间">-->
                                                            <!--<el-input disabled="true" value="2021/1/20"></el-input>-->
                                                        <!--</el-form-item>-->
                                                    <!--</el-col>-->
                                                    <el-col :span="8" :offset="2">
                                                        <el-form-item label="服务机构">
                                                            <el-input disabled="true" value="省二医院"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8" :offset="2">
                                                        <el-form-item label="首诊医生">
                                                            <el-input disabled="true" value="刘医生"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane name="5" label="检验检查">
                            <el-tabs value="5.1">
                                <el-tab-pane label="申请预约" name="5.1">
                                    <el-row style="margin-top: 50px">
                                        <el-col :span="20" offset="2">
                                            <el-card class="box-card">
                                                <div slot="header" >
                                                    <span>检查检验预约</span>
                                                </div>
                                                <el-row>
                                                    <el-col>
                                                        <el-form label-width="100px" label-position="right">
                                                            <el-row>
                                                                <el-col :span="10">
                                                                    <el-form-item label="检查检验机构">
                                                                        <el-select value="检查机构一" placeholder="请选择检查机构">
                                                                            <el-option label="检查机构一" value="检查机构一"></el-option>
                                                                            <el-option label="检查机构二" value="检查机构二"></el-option>
                                                                            <el-option label="检查机构三" value="检查机构三"></el-option>
                                                                        </el-select>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row>
                                                                <el-col :span="10">
                                                                    <el-form-item label="检查检验项目">
                                                                        <el-select value="检查项目一" placeholder="请选择检查机构">
                                                                            <el-option label="检查项目一" value="检查项目一"></el-option>
                                                                            <el-option label="检查项目二" value="检查项目二"></el-option>
                                                                            <el-option label="检查项目三" value="检查项目三"></el-option>
                                                                        </el-select>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row>
                                                                <el-col>
                                                                    <el-form-item label="申请时间">
                                                                        <el-input disabled="true" value="2021/1/20"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row>
                                                                <el-col>
                                                                    <el-form-item label="预约时间">
                                                                        <el-input disabled="true" value="2021/1/26"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row>
                                                                <el-col :span="4" :offset="8">
                                                                    <el-button type="primary">确认</el-button>
                                                                </el-col>
                                                            </el-row>
                                                        </el-form>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="检查/检验结果" name="5.2">
                                    <el-row style="margin-top: 40px">
                                        <el-col :span="22" :offset="1">
                                            <el-card class="box-card">
                                                <div slot="header" >
                                                    <span>检查/检验结果</span>
                                                </div>
                                                <el-row>
                                                    <el-col>
                                                        <el-form label-width="100px" label-position="right">
                                                            <el-row class="formRow">
                                                                <el-col :span="10">
                                                                    <el-form-item label="检查检验项目">
                                                                        <el-input value="检查项目一"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                                <el-col :span="10">
                                                                    <el-form-item label="检查时间">
                                                                        <el-input value="2021/1/21"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col>
                                                                    <el-form-item label="检查检验结果">
                                                                        <el-input type="textarea" :autosize="{minRows:20,MaxRows:24}"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="12">
                                                                    <el-form-item label="检查检验机构">
                                                                        <el-input disabled="true" value="检查机构一"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="8">
                                                                    <el-form-item label="检查医生">
                                                                        <el-input value="刘医生"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                                <el-col :span="8">
                                                                    <el-form-item label="签字医生">
                                                                        <el-input value="周医生"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="10">
                                                                    <span>附件：（音频、视频、图片、文件）</span>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row style="margin-top:40px;margin-bottom:20px">
                                                                <el-col :span="8" :offset="8">
                                                                    <el-button type="primary">查看附件</el-button>
                                                                </el-col>
                                                            </el-row>
                                                        </el-form>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                            </el-tabs>
                            <!--<el-row style="margin-top: 40px">-->
                                <!--<el-col :span="22" :offset="1">-->
                                    <!--<el-card class="box-card">-->
                                        <!--<el-row>-->
                                            <!--<el-col>-->
                                                <!--<el-form label-width="100px" label-position="right">-->
                                                    <!--<el-row class="formRow">-->
                                                        <!--<el-col :span="10">-->
                                                            <!--<el-form-item label="检查检验项目">-->
                                                                <!--<el-input value="检查项目一"></el-input>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                        <!--<el-col :span="10">-->
                                                            <!--<el-form-item label="检查时间">-->
                                                                <!--<el-input value="2021/1/21"></el-input>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                    <!--<el-row class="formRow">-->
                                                        <!--<el-col>-->
                                                            <!--<el-form-item label="检查检验结果">-->
                                                                <!--<el-input type="textarea" :autosize="{minRows:20,MaxRows:24}"></el-input>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                    <!--<el-row class="formRow">-->
                                                        <!--<el-col :span="12">-->
                                                            <!--<el-form-item label="检查检验机构">-->
                                                                <!--<el-input disabled="true" value="检查机构一"></el-input>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                    <!--<el-row class="formRow">-->
                                                        <!--<el-col :span="8">-->
                                                            <!--<el-form-item label="检查医生">-->
                                                                <!--<el-input value="刘医生"></el-input>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                        <!--<el-col :span="8">-->
                                                            <!--<el-form-item label="签字医生">-->
                                                                <!--<el-input value="周医生"></el-input>-->
                                                            <!--</el-form-item>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                    <!--<el-row class="formRow">-->
                                                        <!--<el-col :span="10">-->
                                                            <!--<span>附件：（音频、视频、图片、文件）</span>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                    <!--<el-row style="margin-top:40px;margin-bottom:20px">-->
                                                        <!--<el-col :span="8" :offset="8">-->
                                                            <!--<el-button type="primary">确认</el-button>-->
                                                            <!--<el-button>取消</el-button>-->
                                                        <!--</el-col>-->
                                                    <!--</el-row>-->
                                                <!--</el-form>-->
                                            <!--</el-col>-->
                                        <!--</el-row>-->
                                    <!--</el-card>-->
                                <!--</el-col>-->
                            <!--</el-row>-->
                        </el-tab-pane>
                        <el-tab-pane name="6" label="用药">
                            <el-row style="margin-top: 20px">
                                <el-col :span="8" :offset="8">
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
                                    <span>首诊医生</span>
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
                                            <!--<el-col :span="8" :offset="2">-->
                                                <!--<el-form-item label="问诊时间">-->
                                                    <!--<el-input disabled="true" value="2021/1/20"></el-input>-->
                                                <!--</el-form-item>-->
                                            <!--</el-col>-->
                                            <el-col :span="8" :offset="8">
                                                <el-form-item label="服务机构">
                                                    <el-input disabled="true" value="省二医院"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row class="formRow">
                                            <el-col :span="8" :offset="8">
                                                <el-form-item label="首诊医生">
                                                    <el-input disabled="true" value="刘医生">
                                                    </el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row class="formRow">
                                            <el-col :span="4" :offset="8">
                                                <el-form-item >
                                                    <el-button type="primary">确认配方</el-button>
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
                        </el-tab-pane>
                        <el-tab-pane name="7" label="预约门诊">
                            <el-row style="margin-top: 40px">
                                <el-col :span="20" :offset="2">
                                    <el-tabs type="border-card" value="预约列表">
                                        <el-tab-pane name="预约列表" label="预约列表">
                                            <el-card class="box-card">
                                                <!--<div slot="header">-->
                                                    <!--<el-row>-->
                                                        <!--<el-col :span="4">-->
                                                            <!--<span>预约列表</span>-->
                                                        <!--</el-col>-->
                                                        <!--&lt;!&ndash;<el-col :span="8" :offset="8">&ndash;&gt;-->
                                                            <!--&lt;!&ndash;<el-button size="small" type="primary">一键确认预约</el-button>&ndash;&gt;-->
                                                        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                                                    <!--</el-row>-->
                                                <!--</div>-->
                                                <el-row style="margin-top: 20px">
                                                    <el-col>
                                                        <el-table style="width: 100%;">
                                                            <el-table-column label="申请时间"></el-table-column>
                                                            <el-table-column label="首诊医生"></el-table-column>
                                                            <el-table-column label="操作" fixed="right">
                                                                <template slot-scope="scope">
                                                                    <el-button  type="primary" size="small">确认预约</el-button>
                                                                </template>
                                                            </el-table-column>
                                                        </el-table>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                            <el-row style="margin-top: 40px;">
                                <el-col :span="20" :offset="2">
                                    <el-tabs type="border-card" value="预约门诊">
                                        <el-tab-pane label="预约门诊" name="预约门诊">
                                            <el-card class="box-card">
                                                <el-row>
                                                    <el-col>
                                                        <el-form label-width="100px" label-position="right">
                                                            <el-row class="formRow">
                                                                <el-col :span="18" :offset="3">
                                                                    <el-form-item label="预约医院">
                                                                        <el-input disabled="true" value="医院名称"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="18" :offset="3">
                                                                    <el-form-item label="预约医生">
                                                                        <el-input disabled="true" value="张医生"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="18" :offset="3">
                                                                    <el-form-item label="预约时间">
                                                                        <el-input disabled="true" value="2021/1/20"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="18" :offset="3">
                                                                    <el-form-item label="申请时间">
                                                                        <el-input disabled="true" value="2021/1/1"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="18" :offset="3">
                                                                    <el-form-item label="首诊医生">
                                                                        <el-input disabled="true" value="张医生"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row class="formRow">
                                                                <el-col :span="18" :offset="3">
                                                                    <el-form-item label="服务机构">
                                                                        <el-input disabled="true" value="服务机构"></el-input>
                                                                    </el-form-item>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row>
                                                                <el-col :span="4" :offset="10 ">
                                                                    <el-button type="primary">确认预约</el-button>
                                                                </el-col>
                                                            </el-row>
                                                        </el-form>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
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