const PageController = {

}

PageController.index = async (ctx) => {
    await ctx.render('index');
};

PageController.opManage = async (ctx) => {
    await ctx.render('op_manage');
};

module.exports = PageController;