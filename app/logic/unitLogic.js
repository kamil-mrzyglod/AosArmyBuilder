
export function calculateAvgDamage(unit) {
    var avgDmg = 0;
    _.map(unit.melee, (weapon) => {
        avgDmg += calculateWeaponAvgDamage(weapon);
    });

    return avgDmg.toFixed(2);
}

export function calculateWeaponAvgDamage(weapon) {
    var stats = weapon.stats.split('/'); // Attacks/H/W/R/Dmg
    var dmg = stats[4];

    if (stats[4].startsWith('D3')) {
        dmg = 2;
    } else if (stats[4].startsWith('D6')) {
        dmg = 3.5;
    } else {
        dmg = parseInt(stats[4]);
    }

    return parseInt(stats[0]) * ((6 - parseInt(stats[1]) + 1) / 6) * ((6 - parseInt(stats[2]) + 1) / 6) * dmg;
}

export function calculateMaxDamage(unit) {
    var maxDmg = 0;
    _.map(unit.melee, (weapon) => {
        var stats = weapon.stats.split('/'); // Attacks/H/W/R/Dmg
        var dmg = stats[4];

        if (stats[4].startsWith('D3')) {
            dmg = 3;
        } else if (stats[4].startsWith('D6')) {
            dmg = 6;
        } else {
            dmg = parseInt(stats[4]);
        }

        maxDmg += parseInt(stats[0]) * dmg;
    });

    return maxDmg.toFixed(2);
}
