<template>
    <div>
        <el-container>
            <el-header class="border">
                <el-row type="flex" class="demo-avatar demo-basic" style="height: 100%" justify="end">
                    <el-col style="margin-top: 20px" :span="2">
                        荣耀时刻
                    </el-col>
                    <el-col  style="margin-top: 20px" :span="2">
                        村医信息
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
                <el-aside v-if="tabName === '1' || tabName === '2'" width="500px" class="border minHeight">
                    <el-row class="formRow">
                        <el-col>
                            上级医生列表
                        </el-col>
                    </el-row>
                    <el-row class="formRow">
                        <el-col :span="11">
                            <el-button ><el-card class="box-card">
                                <el-row>
                                    <el-image
                                            style="width: auto; height: 100px"
                                            :src="url"
                                            fit="fit"></el-image>
                                </el-row>
                                <el-row>
                                    姓名：张大夫
                                </el-row>
                                <el-row>
                                    机构：省二医院
                                </el-row>
                                <el-row>
                                    职称：主任医师
                                </el-row>
                                <el-row>
                                    收费：30元/次
                                </el-row>
                            </el-card></el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button ><el-card class="box-card">
                                <el-row>
                                    <el-image
                                            style="width: auto; height: 100px"
                                            :src="url"
                                            fit="fit"></el-image>
                                </el-row>
                                <el-row>
                                    姓名：张大夫
                                </el-row>
                                <el-row>
                                    机构：省二医院
                                </el-row>
                                <el-row>
                                    职称：主任医师
                                </el-row>
                                <el-row>
                                    收费：30元/次
                                </el-row>
                            </el-card></el-button>
                        </el-col>
                    </el-row>
                    <el-row class="formRow">
                        <el-col :span="11">
                            <el-button ><el-card class="box-card">
                                <el-row>
                                    <el-image
                                            style="width: auto; height: 100px"
                                            :src="url"
                                            fit="fit"></el-image>
                                </el-row>
                                <el-row>
                                    姓名：张大夫
                                </el-row>
                                <el-row>
                                    机构：省二医院
                                </el-row>
                                <el-row>
                                    职称：主任医师
                                </el-row>
                                <el-row>
                                    收费：30元/次
                                </el-row>
                            </el-card></el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button ><el-card class="box-card">
                                <el-row>
                                    <el-image
                                            style="width: auto; height: 100px"
                                            :src="url"
                                            fit="fit"></el-image>
                                </el-row>
                                <el-row>
                                    姓名：张大夫
                                </el-row>
                                <el-row>
                                    机构：省二医院
                                </el-row>
                                <el-row>
                                    职称：主任医师
                                </el-row>
                                <el-row>
                                    收费：30元/次
                                </el-row>
                            </el-card></el-button>
                        </el-col>
                    </el-row>
                    <el-row class="formRow">
                        <el-col :span="11">
                            <el-button ><el-card class="box-card">
                                <el-row>
                                    <el-image
                                            style="width: auto; height: 100px"
                                            :src="url"
                                            fit="fit"></el-image>
                                </el-row>
                                <el-row>
                                    姓名：张大夫
                                </el-row>
                                <el-row>
                                    机构：省二医院
                                </el-row>
                                <el-row>
                                    职称：主任医师
                                </el-row>
                                <el-row>
                                    收费：30元/次
                                </el-row>
                            </el-card></el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button ><el-card class="box-card">
                                <el-row>
                                    <el-image
                                            style="width: auto; height: 100px"
                                            :src="url"
                                            fit="fit"></el-image>
                                </el-row>
                                <el-row>
                                    姓名：张大夫
                                </el-row>
                                <el-row>
                                    机构：省二医院
                                </el-row>
                                <el-row>
                                    职称：主任医师
                                </el-row>
                                <el-row>
                                    收费：30元/次
                                </el-row>
                            </el-card></el-button>
                        </el-col>
                    </el-row>
                    <el-row class="formRow">
                        <el-col>
                            <el-button type="primary">选择远程问诊大夫</el-button>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row class="formRow">
                        <el-col :span="12">
                            <el-link type="primary">上级大夫列表</el-link>
                        </el-col>
                        <el-col :span="12">
                            <el-link type="info">远程问诊</el-link>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '3'" width="500px" class="border minHeight">
                    <el-row class="formRow">
                        <el-col :span="22" :offset="1">
                            <el-card >
                                <el-row>
                                    <el-col :span="8" :offset="8">视频通话</el-col>
                                </el-row>
                                <el-row style="margin-top: 20px">
                                    <el-col >
                                        <el-card style="height: 400px">
                                            <el-image :src="url" style="height: 360px;"></el-image>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 50px">
                                    <el-col>
                                        <el-button type="primary" >结束远程问诊</el-button>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 50px">
                        <el-col :span="12">
                            <el-link type="info">上级大夫列表</el-link>
                        </el-col>
                        <el-col :span="12">
                            <el-link type="primary">远程问诊</el-link>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '4'" width="500px" class="border minHeight">
                    <el-row style="margin-top: 20px">
                        <el-col :span="22" offset="1">
                            <el-card class="box-card">
                                <div slot="header" >
                                    <span>患者信息（档案信息）</span>
                                </div>
                                <el-row>
                                    <el-col>
                                        <el-form label-width="80px" label-position="right" style="min-height: 010px">
                                            <el-row class="formRow">
                                                <el-col :span="10">
                                                    <el-form-item label="姓名">
                                                        <el-input disabled="true" value="张三"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="10" :offset="2">
                                                    <el-form-item label="性别">
                                                        <el-input disabled="true" value="男"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row class="formRow">
                                                <el-col :span="22" :offset="1">
                                                    <el-card typeof="card-box">
                                                        <div slot="header" >
                                                            <span>患者症状基本信息</span>
                                                        </div>
                                                        <el-row>
                                                            <el-col :span="8">
                                                                症状1
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8">
                                                                症状2
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8">
                                                                症状3
                                                            </el-col>
                                                        </el-row>
                                                    </el-card>
                                                </el-col>
                                            </el-row>
                                            <el-row style="margin-top: 50px">
                                                <el-col :span="22">
                                                    <el-form-item label="村医">
                                                        <el-input disabled="true" value="李大夫"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row class="formRow">
                                                <el-col :span="22">
                                                    <el-form-item label="服务机构">
                                                        <el-input disabled="true" value="省二医院"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-form>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '5'" width="500px" class="border minHeight">
                    <el-row class="formRow">
                        <el-col :span="22" :offset="1">
                            <el-card >
                                <el-row>
                                    <el-col :span="8" :offset="8">视频通话</el-col>
                                </el-row>
                                <el-row style="margin-top: 20px">
                                    <el-col >
                                        <el-card style="height: 400px">
                                            <el-image :src="url" style="height: 360px;"></el-image>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 50px">
                                    <el-col>
                                        <el-button type="primary" >结束远程问诊</el-button>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 50px">
                        <el-col :span="12">
                            <el-link type="info">上级大夫列表</el-link>
                        </el-col>
                        <el-col :span="12">
                            <el-link type="primary">远程问诊</el-link>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-aside v-else-if="tabName === '6'" width="500px" class="border minHeight">
                    <el-row class="formRow">
                        <el-col :span="22" :offset="1">
                            <el-card >
                                <el-row>
                                    <el-col :span="8" :offset="8">视频通话</el-col>
                                </el-row>
                                <el-row style="margin-top: 20px">
                                    <el-col >
                                        <el-card style="height: 400px">
                                            <el-image :src="url" style="height: 360px;"></el-image>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 50px">
                                    <el-col>
                                        <el-button type="primary" >结束远程问诊</el-button>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row style="margin-top: 50px">
                        <el-col :span="12">
                            <el-link type="info">上级大夫列表</el-link>
                        </el-col>
                        <el-col :span="12">
                            <el-link type="primary">远程问诊</el-link>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main class="border minHeight">
                    <el-tabs @tab-click="handleTabsClick" value="1">
                        <el-tab-pane name="1" label="档案信息">
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
                                            <el-button type="primary">提交档案</el-button>
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
                            <el-divider></el-divider>
                            <el-form ref="form2"   label-width="200px" class="formBorder" style="min-height:100px">
                                <el-row class="formRow">
                                    <el-col :span="10" >
                                        <el-form-item label="村医(下家单位医生)">
                                            <el-input value="刘大夫"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="formRow">
                                    <el-col :span="10" >
                                        <el-form-item label="服务机构">
                                            <el-input v-model="orgName" disabled="true" aria-placeholder="二级医院"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane name="2" label="挂号">
                            <el-row >
                                <el-col :span="4">患者：<strong>XXX</strong></el-col>
                                <el-col :span="4">协助者村医：<strong>YYY</strong></el-col>
                            </el-row>
                            <el-row class="formRow">
                                <el-col>
                                    <el-tabs value="费用清单" type="border-card" >
                                        <el-tab-pane label="费用清单" name="费用清单">
                                            <el-form  ref="form" size="small" label-position="right"  label-width="100px" class=" formRow" style="min-height:100px">
                                                <el-row class="formRow">
                                                    <el-col :span="4">
                                                        <el-form-item label="挂号费">
                                                            <el-link type="danger">0.00</el-link>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-form-item label="诊查费">
                                                            <el-link type="danger">0.00</el-link>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-form-item label="工本费">
                                                            <el-link type="danger">0.00</el-link>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-form-item label="预约服务费">
                                                            <el-link type="danger">0.00</el-link>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-form-item label="总金额">
                                                            <el-link type="danger">0.00</el-link>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="4" :offset="6">
                                                        <el-form-item label="">
                                                            <el-button type="primary"> 预约号</el-button>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                            <el-row class="formRow">
                                <el-col>
                                    <el-tabs value="症状信息" type="border-card" >
                                        <el-tab-pane label="症状信息" name="症状信息">
                                            <el-form  ref="form" size="small" label-position="right"  label-width="80px" class=" formRow" style="min-height:600px">
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="卡号">
                                                            <el-input placeholder="请输入卡号" >
                                                                <template slot="append">
                                                                    <el-button type="primary">读卡</el-button>
                                                                </template>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="14">
                                                        <el-form-item label="活动时间" required>
                                                            <el-col :span="11">
                                                                <el-form-item prop="date1">
                                                                    <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col class="line" :span="2">-</el-col>
                                                            <el-col :span="11">
                                                                <el-form-item prop="date2">
                                                                    <el-time-picker placeholder="选择时间"  style="width: 100%;"></el-time-picker>
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="病人姓名">
                                                            <el-input value="XXX" disabled="true"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-form-item label="性别">
                                                            <el-input value="男" disabled="true"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="7">
                                                        <el-form-item label="性别">
                                                            <el-date-picker type="date" placeholder="选择日期" value="yyyy-mm-dd"  style="width: 100%;" disabled=""></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="22">
                                                        <el-form-item label="地址">
                                                            <el-input value="XX省XX市XX县XX镇XX村" disabled="true"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="15">
                                                        <el-form-item label="身份证号">
                                                            <el-input disabled="true" value="513728199302202387"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="4" :offset="3">
                                                        <el-form-item label="婚姻">
                                                            <el-input disabled="true" value="已婚"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="22">
                                                        <el-form-item label="联系方式">
                                                            <el-input value="13672893202" ></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="挂号医生">
                                                            <el-select placeholder="请选择挂号医生">
                                                                <el-option value="挂号医生一" label="挂号医生一"></el-option>
                                                                <el-option value="挂号医生二" label="挂号医生二"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <el-form-item label="挂号科室">
                                                            <el-select placeholder="请选择挂号科室">
                                                                <el-option value="挂号科室一" label="挂号科室一"></el-option>
                                                                <el-option value="挂号科室二" label="挂号科室二"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="医生职称">
                                                            <el-select placeholder="请选择医生职称">
                                                                <el-option value="医生职称一" label="医生职称一"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <el-form-item label="挂号类别">
                                                            <el-select placeholder="请选择挂号类别">
                                                                <el-option value="类别一" label="类别一"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8">
                                                        <el-form-item label="医院">
                                                            <el-select placeholder="请选择医院">
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
                        <el-tab-pane name="3" label="问诊">
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

                                                </el-row>
                                                <el-row class="formRow">
                                                    <el-col :span="8" :offset="2">
                                                        <el-form-item label="问诊时间">
                                                            <el-input disabled="true" value="刘大夫"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane name="4" label="检查检验">
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
                                                            <el-form-item label="制单时间">
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
                                                        <el-col :span="4" >
                                                            <el-button> 返回上一级</el-button>
                                                        </el-col>
                                                    </el-row>
                                                </el-form>
                                            </el-col>
                                        </el-row>
                                    </el-card>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col></el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane name="5" label="用药">
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
                                                <el-form-item label="问诊时间">
                                                    <el-input disabled="true" value="2021/1/20"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8" :offset="2">
                                                <el-form-item label="服务机构">
                                                    <el-input disabled="true" value="省二医院"></el-input>
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
                                                    <el-button type="primary">提交用药方案</el-button>
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
                        <el-tab-pane name="6" label="预约问诊">
                            <el-row style="margin-top: 50px">
                                <el-col :span="20" offset="2">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearFix">
                                            <el-row>
                                                <el-col :span="4">
                                                    预约门诊信息
                                                </el-col>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-col>
                                                <el-form label-width="100px" label-position="right">
                                                    <el-row>
                                                        <el-col :span="10">
                                                            <el-form-item label="上级医院">
                                                                <el-select  value="省二院">
                                                                    <el-option label="省二院" name="省二院"></el-option>
                                                                    <el-option label="市人民医院" name="市人民医院"></el-option>
                                                                    <el-option label="华西医院" name="华西医院"></el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="10">
                                                            <el-form-item label="上级医院大夫">
                                                                <el-select  value="张大夫">
                                                                    <el-option label="张大夫" name="张大夫"></el-option>
                                                                    <el-option label="王大夫" name="王大夫"></el-option>
                                                                    <el-option label="赵大夫" name="赵大夫"></el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8">
                                                            <el-form-item label="申请预约时间">
                                                                <el-input value="2021/1/20"></el-input>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8">
                                                            <el-form-item label="首诊大夫">
                                                                <el-input value="张大夫"></el-input>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8">
                                                            <el-form-item label="预约时间">
                                                                <el-input value="2021/1/26" disabled="true"></el-input>
                                                            </el-form-item>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row class="formRow">
                                                        <el-col :span="4" >
                                                            <el-form-item >
                                                                <el-button type="primary">预约问诊</el-button>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :span="4" >
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
                        </el-tab-pane>
                    </el-tabs>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import PatientRecord from '../../components/patient/PatientRecord.vue'
    export default {
        name: "PutOnRecord",
        components: {
			PatientRecord
        },
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
                orgName: '二级医院',
                tabName: '1',
                isShowDoctor: true,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
                tableData: [
                    {
                    	num:1,
                        name: 'xxx',
						norms: '盒装',
                        usage: '*****'
                    },
					{
						num:2,
						name: 'xxx',
						norms: '盒装',
						usage: '*****'
					},
					{
						num:3,
						name: 'xxx',
						norms: '盒装',
						usage: '*****'
					}
                ],
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
			};
		},
        methods : {
			handleTabsClick(tab, event){
				this.tabName = tab.name
            },
			getHtml: function (data) {

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

    .clearFix:before,
    .clearFix:after {
        display: table;
        content: "";
    }
    .clearFix:after {
        clear: both
    }

</style>