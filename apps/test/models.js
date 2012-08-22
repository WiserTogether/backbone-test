TestApp.Models.Condition = Backbone.Model.extend({
    data: {
        "name": "Aneurysm",
        "treatments": {
            "ace-inhibitors":{
                "description":"High blood pressure, or hypertension, can increase your risk of an aneurysm. The force of the blood against the walls of your arteries can stretch part of a wall until it bulges outward (an aneurysm), particularly if the artery is already diseased. If you're diagnosed with an aneurysm, the goal of treatment is to prevent it from rupturing (bursting) or putting pressure on the surrounding organs. This includes controlling high blood pressure, often through blood pressure medication (known as...",
                "display_name":"ACE inhibitors"
            },
            "angiotensin-ii-receptor-blockers":{
                "description":"If you have a heart condition, you may be prescribed angiotensin II receptor blockers (ARBs) to lower your blood pressure. Angiotensin II is a naturally occurring substance in the body that causes the blood vessels to become narrower. This in turn raises blood pressure, which is the force of blood pushing against the walls of the blood vessels. Angiotensin II can also increase the levels of sodium and water in the body - another factor that leads to high blood pressure. Angiotensin II receptor...",
                "display_name":"Angiotensin II receptor blockers"
            },
            "bile-acid-resins":{
                "description":"People at risk of developing heart disease - or have been diagnosed with a heart condition - often have too much cholesterol in their blood. Along with other treatments, doctors commonly prescribe cholesterol-lowering medication for heart patients. Bile acid resins, also known as bile sequestrants or bile acid-binding medicines, are one type of cholesterol-lowering medication. Primarily, they lower LDL ('bad') cholesterol levels. LDL cholesterol is the kind that can lead to plaque buildup inside...",
                "display_name":"Bile-acid resins"
            },
            "calcium-channel-blockers":{
                "description":"Calcium isn't just important for healthy bones and teeth: It also allows your muscles to contract, including the muscles in the walls of your blood vessels. If you have certain heart-related conditions, this narrowing of blood vessels can lead to higher blood pressure and other issues. Calcium channel blockers are often prescribed to lower blood pressure and, in some cases, relieve chest pain. The medication works by limiting (or blocking) the amount of calcium taken in by muscle cells in the...",
                "display_name":"Calcium channel blockers"
            },
            "diuretics-water-pills":{
                "description":"If you have a heart-related medical condition, your heart may not be pumping strongly enough. As a result, fluids can build up in your body. A diuretic, also known as a water pill or water tablet, can help your body reduce excess fluid by increasing how often you urinate. Your blood contains more than just blood cells - it also contains oxygen, nutrients and a lot of water. Diuretics cause your kidneys to get rid of excess sodium (salt) through your urine - taking with it water from your...",
                "display_name":"Diuretics (water pills)"
            },
            "fibrates":{
                "description":"Lowering cholesterol is an important part of treating and preventing heart disease. While some cholesterol is necessary and healthy, high cholesterol is a major contributor to heart disease and heart attack. Along with other treatments, doctors commonly prescribe cholesterol-lowering medication for heart patients. Fibrates are one type of cholesterol-lowering medication. Fibrates primarily reduce levels of triglycerides in the blood, which are a damaging type of fat in the blood. They also...",
                "display_name":"Fibrates"
            },
            "statins":{
                "description":"Lowering cholesterol is an important part of treating and preventing heart disease. High cholesterol can contribute to atherosclerosis (artery blockage), which can lead to heart attack, stroke, aneurysm and other health complications. If you have an aneurysm, the goal of treatment is to make sure the aneurysm doesn't get bigger or burst. Atherosclerosis can change blood vessel walls; as plaque builds up, the weakened artery wall can bulge out more or rupture. Managing cholesterol, and therefore...",
                "display_name":"Statins"
            }
        }
    },

    fetch: function (options) {
        options = options ? _.clone(options) : {};

        if (!this.set(this.data, options)) {
            return false;
        }
        if (options.success) {
            options.success(this, {});
        }
    },

    save: function (options) {
        options = options ? _.clone(options) : {};

        if (options.success) {
            options.success(this, {});
        }
        return {};
    }
});
