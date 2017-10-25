// 1. 使用 chrome 打开 https://weibo.com （确保你登录了微博）
// 2. 打开调试窗口，在 console 中贴下面的代码后回车
// 数据来自：https://github.com/yu961549745/WeiboBlackList
// 代码来自：https://github.com/overtrue/weibo-dogs-killer


var dogs = [1041574032, 1234596492, 1265924373, 1280076535, 1282270102, 1282371413, 1283164021, 1305476450, 1348513711, 1374321134, 1377355290, 1391753093, 1403386141, 1405603123, 1409910532, 1410124131, 1429791521, 1484598381, 1495485357, 1505700263, 1525088397, 1570016173, 1579272310, 1588830357, 1613374674, 1632909860, 1642272495, 1649399345, 1651941013, 1653282974, 1657591691, 1658278557, 1666599012, 1670201221, 1674071682, 1680200411, 1682814920, 1690768907, 1693311335, 1694432737, 1696020927, 1702267517, 1703425261, 1709070650, 1713064495, 1719198895, 1723514521, 1723829324, 1725382803, 1732644913, 1736263965, 1736279014, 1737647831, 1739901115, 1743339141, 1745662665, 1748068057, 1749775825, 1749915415, 1751984912, 1755296263, 1759547087, 1762706205, 1765697405, 1766122373, 1774274405, 1775137910, 1775613335, 1777066395, 1781422637, 1782621495, 1787098822, 1789012593, 1790670015, 1790761961, 1794010902, 1800337273, 1823809197, 1824515351, 1824581023, 1839857351, 1840691947, 1851422170, 1851473734, 1852654103, 1859851754, 1884323354, 1885151102, 1887921907, 1889031894, 1889134740, 1889196427, 1891031660, 1892841767, 1893935004, 1900227754, 1903526513, 1906882191, 1909976992, 1912093364, 1913954770, 1918951193, 1920072325, 1922854483, 1926049617, 1926551181, 1935760780, 1937256124, 1943922885, 1945405223, 1954784600, 1954898722, 1978558182, 1985427375, 1997378897, 1997430313, 1998946093, 2018658895, 2033027873, 2042399737, 2045592021, 2066669447, 2095876615, 2102856290, 2106405744, 2112270821, 2119241041, 2122838230, 2143736030, 2162805902, 2170039871, 2195788654, 2202943573, 2205748423, 2219194830, 2238168285, 2240459775, 2253196910, 2265908004, 2274697173, 2278235085, 2284453344, 2299029823, 2301685773, 2308673977, 2313693972, 2314537334, 2330760312, 2334239593, 2335060081, 2345546897, 2346920665, 2348122654, 2355873243, 2357033797, 2360180761, 2369379394, 2369809515, 2372605411, 2379528185, 2397004535, 2400240411, 2401393393, 2401943477, 2405534261, 2407242912, 2418980745, 2455841223, 2468501370, 2477460747, 2504697545, 2518478637, 2520087880, 2528679641, 2531539783, 2546098600, 2561438355, 2571150711, 2610418693, 2611833450, 2612327705, 2614001562, 2614021785, 2622596227, 2626927361, 2633113967, 2639227461, 2640428811, 2645791712, 2647495542, 2650419291, 2661497287, 2667538945, 2669651422, 2681947182, 2682353630, 2694782097, 2697385482, 2708646527, 2709630325, 2714032523, 2720249823, 2722174021, 2728966594, 2731660797, 2734746975, 2766875143, 2803232204, 2806325147, 2822792580, 2826064925, 2829636631, 2847093540, 2849310171, 2875970310, 2877375185, 2884830430, 2885255711, 2898929101, 2922879225, 2928485055, 2932864527, 2934233095, 2945247480, 2950667711, 2963677843, 2970479921, 2992328377, 3029972167, 3030609907, 3040936547, 3049734521, 3050240134, 3065984831, 3078648857, 3116637797, 3123751063, 3141318761, 3157925462, 3159428572, 3168778251, 3170766712, 3173184517, 3174983660, 3182406654, 3184382850, 3189759282, 3190150355, 3209288190, 3209603200, 3212011227, 3226484780, 3230430014, 3235318832, 3240801333, 3261813374, 3271453730, 3280723341, 3287527637, 3305446403, 3318338712, 3358412904, 3397040152, 3440572154, 3477430640, 3481223447, 3496397221, 3545020587, 3590871057, 3592365365, 3607995250, 3621477511, 3626867120, 3653593281, 3685778045, 3688212085, 3703933374, 3715209581, 3732639263, 3738206370, 3786523043, 3786906784, 3831030697, 3840668734, 3848022748, 3932807856, 3948881580, 3951103736, 3973075219, 3974845528, 3975089454, 3979935493, 5012841321, 5014141958, 5020561830, 5031178946, 5038577367, 5059660551, 5063137160, 5064046310, 5078081210, 5088125436, 5088735141, 5091407789, 5092428322, 5100461906, 5106709983, 5108266451, 5116356922, 5117947348, 5131325967, 5142938036, 5146736086, 5150952118, 5158202693, 5158649359, 5174465539, 5207740184, 5209943797, 5219639005, 5226057797, 5235386046, 5241254653, 5243453050, 5248677108, 5253184819, 5284893156, 5289026864, 5293944806, 5303365027, 5330205046, 5338487311, 5343922833, 5344857001, 5364715873, 5379446771, 5380177988, 5381670096, 5398364817, 5426142115, 5433169859, 5450391911, 5454695683, 5460203843, 5464167149, 5471246591, 5474940961, 5480191060, 5488212817, 5515844015, 5527313256, 5532217137, 5532760509, 5571318748, 5573535479, 5577097996, 5580658563, 5580805844, 5589635076, 5603635635, 5608396703, 5612086708, 5613090845, 5623141879, 5623348537, 5623426877, 5623807609, 5634119774, 5638719581, 5640104831, 5651704821, 5651760514, 5657339966, 5666501360, 5669707661, 5671059533, 5674309904, 5675315465, 5675487085, 5682654049, 5686037085, 5697134119, 5700197684, 5752569967, 5760170376, 5768433920, 5785115772, 5791757379, 5801787915, 5816398532, 5836217079, 5865752737, 5868076583, 5895880265, 5897838856, 5898198360, 5926708754, 5935347929, 5942111104, 5973491890, 5976260575, 5984813988, 6031549751]

var http = new XMLHttpRequest()
var i = 0
var timer = null

function kill() {
    if (i >= dogs.length) {
        return clearInterval(timer)
    }
    var dogId = dogs[i]
    var url = 'https://weibo.com/aj/filter/block?ajwvr=6'

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    http.send('uid=' + dogId + '&filter_type=1&status=1&interact=1&follow=1')
    http.onreadystatechange = function() {
        if (http.readyState != 4 || http.status != 200) {
            return;
        }

        var data = {
            msg: '解析失败'
        }
        try {
            data = JSON.parse(http.responseText)
        } catch (err) {}

        if (data.code == 100000) {
            console.log(i + '[' + dogId + '] => 成功:' + data.msg + ' - ' + http.status + ' - ' + http.responseText)
        } else {
            console.error(i + '[' + dogId + '] => 失败:' + data.msg + ' - ' + http.status + ' - ' + http.responseText)
        }
    }
    i++
}

timer = setInterval(kill, 2000)