<template>
    <div class="prescription-container tmp1">
        <div class="title">鼎康慈桦互联网医院处方笺
            <span class="sub-title">普通</span>
        </div>

        <div class="meta cfbh pt20">
            处方编号：
            <span class="blue">6855765380333593</span>
        </div>

        <div class="content pt20">

            <div class="content1">
                <div class="flex">
                    <div class="left">费别：<span class="lines">自费/医保</span></div>
                    <div class="right">科室：内科</div>
                </div>

                姓名：光
                性别：男
                年龄：55岁<br />
                临床诊断：咳嗽（R05）
                开具日期：2025-06-22
            </div>

            <div class="line"></div>

            <div class="prescription">
                <div class="rp">Rp</div>
                1. 苏黄止咳胶囊<br />
                <span class="indent">
                    规格：0.45g×9粒　数量：1盒　用法：口服；一次3粒；3次/天；
                </span>
            </div>

            <div class="signature">
                <div>
                    医师：李跃桥<br />
                    审核：代堂堂
                </div>
                <div class="stamp">
                    鼎康慈桦<br />互联网医院<br /><small>电子专用章</small>
                </div>
            </div>

            <div class="footer-note">
                医师处方仅开具3日内有效（医师注明除外）本处方为患者在_______使用
            </div>
        </div>
    </div>
</template>

<script setup>
// 你可以将 props、emit、数据等逻辑写在这里（如传入患者信息、药品列表等）
</script>

<style scoped lang="scss">
.prescription-container {
    font-family: 'SimSun', serif;
    position: relative;

    display: flex;
    flex-direction: column;
    height: 100%;

}

.tmp1 {

    .pt20 {
        padding-top: 20px;
    }


    .title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        position: relative;
    }

    .sub-title {
        position: absolute;
        top: 20px;
        right: 0;
        font-size: 14px;
        font-weight: 0;
        border: 1px solid #767676;
        padding: 3px 10px;
    }

    .cfbh {
        margin-left: 50%;
        font-size: 12px;
    }

    .line {
        border-top: 1px solid #000;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;

        .content1 {
            font-size: 14px;
        }

        .content2 {}

        .content3 {}


        .lines {
            position: relative;
            width: 100%;
        }

        .lines::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #000;
            z-index: 1;
        }
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .left,
    .right {
        width: 50%;
    }

    .prescription {
        flex: 1;
        font-size: 12px;
    }

    .rp {
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0;
    }

    .indent {
        display: inline-block;
        margin-left: 2em;
    }

    .signature {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    .stamp {
        color: red;
        font-size: 16px;
        border: 2px solid red;
        border-radius: 50%;
        padding: 30px;
        text-align: center;
        width: 100px;
        height: 67px;
        line-height: 1.4;
    }

    .footer-note {
        margin-top: 20px;
        font-size: 12px;
        color: #555;
    }
}

@media print {
  html, body, .content {
    height: 100vh; /* 或直接设定具体值 */
  }

  .prescription {
    height: 100vh;
    flex: 1 1 auto;
    min-height: 0;
  }
}
</style>