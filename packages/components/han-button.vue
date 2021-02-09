<template>
  <button class="han-button" :class="[`han-button--${type}`,{'is-plain':plain}]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  /* eslint-disable */
  name: "hanButton",
  props: {
    type: {
      type: [String],
      default: "",
    },
    plain:{
        type:[Boolean],
        default:false
    }
  },
};
</script>
<style lang="css">
button.han-button {
  font-size: 14px;
  border: 1px solid #dcdfe6;
  background: #fff;
  padding: 12px 20px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-appearance: none;
  white-space: nowrap;
  line-height: 1;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  transition: 0.1s;
  border-radius: 4px;
  margin: 0 15px 0 0;
}
button.han-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
button.han-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}

.han-button.is-plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff
}

.han-button.is-plain:active {
    background: #fff;
    outline: none
}


/*success*/
button.han-button--success{
    color: #fff;
    background: #67C23A;
    border-color: #67C23A;
}
button.han-button--success:hover{
    color: #fff;
    background: #67C23A;
    border-color: #67C23A;
}

button.han-button--success:hover{
    color: #fff;
    background: #67C23A;
    border-color: #67C23A;
    outline: none;
}

.han-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0
}

.han-button--success.is-plain:focus,
.han-button--success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff
}

.han-button--success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none
}
.han-button--success.is-plain.is-disabled,
.han-button--success.is-plain.is-disabled:active,
.han-button--success.is-plain.is-disabled:focus,
.han-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8
}


/*danger*/
button.han-button--danger{
    color: #fff;
    background: #F56C6C;
    border-color: #F56C6C;
}
button.han-button--danger:hover{
    color: #fff;
    background: #F56C6C;
    border-color: #F56C6C;
}

button.han-button--danger:hover{
    color: #fff;
    background: #F56C6C;
    border-color: #F56C6C;
    outline: none;
}

.han-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4
}

.han-button--danger.is-plain:focus,
.han-button--danger.is-plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff
}

.han-button--danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none
}

.han-button--danger.is-plain.is-disabled,
.han-button--danger.is-plain.is-disabled:active,
.han-button--danger.is-plain.is-disabled:focus,
.han-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2
}

/*Warning*/
button.han-button--warning{
    color: #fff;
    background: #E6A23C;
    border-color: #E6A23C;
}
button.han-button--warning:hover{
    color: #fff;
    background: #E6A23C;
    border-color: #E6A23C;
}

button.han-button--warning:hover{
    color: #fff;
    background: #E6A23C;
    border-color: #E6A23C;
    outline: none;
}

.han-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1
}

.han-button--warning.is-plain:focus,
.han-button--warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff
}

.han-button--warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none
}

.han-button--warning.is-plain.is-disabled,
.han-button--warning.is-plain.is-disabled:active,
.han-button--warning.is-plain.is-disabled:focus,
.han-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8
}


/*primary*/
button.han-button--primary{
    color: #fff;
    background:#409EFF;
    border-color:#409EFF;
}
button.han-button--primary:hover{
    color: #fff;
   background:#409EFF;
    border-color:#409EFF;
}

button.han-button--primary:hover{
    color: #fff;
   background:#409EFF;
    border-color:#409EFF;
    outline: none;
}
.han-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff
}

.han-button--primary.is-plain:focus,
.han-button--primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff
}

.han-button--primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none
}

.han-button--primary.is-plain.is-disabled,
.han-button--primary.is-plain.is-disabled:active,
.han-button--primary.is-plain.is-disabled:focus,
.han-button--primary.is-plain.is-disabled:hover {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff
}

/*info*/
button.han-button--info{
    color: #fff;
    background:#909399;
    border-color:#909399;
}
button.han-button--info:hover{
    color: #fff;
    background:#909399;
    border-color:#909399;
}

button.han-button--info:hover{
    color: #fff;
    background:#909399;
    border-color:#909399;
    outline: none;
}

.han-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6
}

.han-button--info.is-plain:focus,
.han-button--info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff
}

.han-button--info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none
}

.han-button--info.is-plain.is-disabled,
.han-button--info.is-plain.is-disabled:active,
.han-button--info.is-plain.is-disabled:focus,
.han-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb
}


</style>

</style>