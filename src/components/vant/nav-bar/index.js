import {
  VantComponent
} from '../common/component';
VantComponent({
  classes: ['title-class'],
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      value: 1
    }
  },
  data: {
    height: 0,
    top: 0
  },
  created: function created() {
    let t = this
    wx.getSystemInfo({
      success: function (res) {
        res.model == 'iPhone X' ? t.setData({
          height: 180,
          top: 80
        }) : t.setData({
          height: 130,
          top: 40
        })
      },
      fail: function (res) {
        t.setData({
          height: 220
        })
      }
    })
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit('click-left');
    },
    onClickRight: function onClickRight() {
      this.$emit('click-right');
    }
  }
});
