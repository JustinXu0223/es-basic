
# 前言

在需要高频交互的动画时候，我们kennel需要考虑使用硬件加速，
CSS3 硬件加速又叫做 GPU 加速，是利用 GPU 进行渲染，
减少 CPU 操作的一种优化方案。由于 GPU 中的 transform 等 CSS 
属性不会触发 repaint，所以能大大提高网页的性能。
