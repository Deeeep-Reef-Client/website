/*
This contains an excerpt from the Deeeep.io Reef Client, GNU GPL v3
*/

const animalStatData = JSON.parse(`[{"name":"fish","size":{"x":48,"y":68},"mass":1,"boosts":1,"level":0,"fishLevel":0,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":0.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":1,"healthMultiplier":1.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"crab","mass":1,"boosts":1,"level":1,"fishLevel":1,"oxygenTime":0,"oxygenTimeMs":0,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.5,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.1,"sizeScale":{"x":1,"y":1},"damageMultiplier":2.5,"healthMultiplier":1.5,"damageBlock":0.5,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"jellyfish","mass":1,"boosts":1,"level":2,"fishLevel":2,"oxygenTime":0,"oxygenTimeMs":0,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.1,"sizeScale":{"x":1,"y":1},"damageMultiplier":2,"healthMultiplier":2,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":127,"biomes":[37,38,22,41,42,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"squid","mass":1,"boosts":2,"level":3,"fishLevel":3,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":111,"biomes":[37,38,41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"seagull","mass":1,"boosts":2,"level":4,"fishLevel":4,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.05,"walkSpeedMultiplier":1.05,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":4.5,"healthMultiplier":4,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"ray","mass":1,"boosts":2,"level":5,"fishLevel":5,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.5,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":127,"biomes":[37,38,22,41,42,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"beaver","mass":1,"boosts":2,"level":6,"fishLevel":6,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"penguin","mass":1,"boosts":2,"level":6,"fishLevel":7,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.15,"walkSpeedMultiplier":1.15,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":5.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"tshark","mass":1,"boosts":3,"level":8,"fishLevel":8,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":7.5,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"dolphin","mass":1,"boosts":3,"level":8,"fishLevel":9,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":38,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"shark","mass":1,"boosts":3,"level":9,"fishLevel":10,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":9,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":38,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"killerwhale","mass":1,"boosts":3,"level":9,"fishLevel":11,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":10,"salinityTimeMs":10000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2.1,"sizeScale":{"x":1,"y":1},"damageMultiplier":8,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"whale","mass":1,"boosts":3,"level":9,"fishLevel":12,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":10,"pressureTimeMs":10000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.05,"walkSpeedMultiplier":1.05,"jumpForceMultiplier":1,"sizeMultiplier":2.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":15,"damageBlock":0,"damageReflection":0,"bleedReduction":0.5,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"worm","mass":1,"boosts":0,"level":0,"fishLevel":13,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":0.9,"sizeScale":{"x":0.8,"y":1},"damageMultiplier":1,"healthMultiplier":1,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":127,"biomes":[37,38,22,41,42,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":true,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"anglerfish","mass":1,"boosts":2,"level":6,"fishLevel":14,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"leopardseal","mass":1,"boosts":2,"level":8,"fishLevel":15,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.15,"walkSpeedMultiplier":1.15,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"blobfish","mass":1,"boosts":1,"level":0,"fishLevel":16,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.1,"sizeScale":{"x":1,"y":1},"damageMultiplier":1,"healthMultiplier":2,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"kingcrab","mass":1,"boosts":1,"level":1,"fishLevel":17,"oxygenTime":0,"oxygenTimeMs":0,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.5,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":2.5,"healthMultiplier":1.5,"damageBlock":0.5,"damageReflection":0.3,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"pollock","mass":1,"boosts":0,"level":0,"fishLevel":18,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.75,"walkSpeedMultiplier":0.75,"jumpForceMultiplier":1,"sizeMultiplier":1,"sizeScale":{"x":1,"y":1},"damageMultiplier":0,"healthMultiplier":0.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"seaturtle","mass":1,"boosts":2,"level":8,"fishLevel":19,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":7,"damageBlock":0.5,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"oarfish","mass":1,"boosts":2,"level":8,"fishLevel":20,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":60,"pressureTimeMs":60000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":0.76,"y":1.03},"damageMultiplier":6.5,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"octopus","mass":1,"boosts":2,"level":7,"fishLevel":21,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.4,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":111,"biomes":[37,38,41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":1000,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantsquid","mass":1,"boosts":3,"level":9,"fishLevel":22,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":15,"pressureTimeMs":15000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":8,"healthMultiplier":8.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":600,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"narwhal","mass":1,"boosts":2,"level":8,"fishLevel":23,"oxygenTime":90,"oxygenTimeMs":90000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":90,"pressureTimeMs":90000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.95,"walkSpeedMultiplier":0.95,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":7.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":1,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"cachalot","mass":1,"boosts":3,"level":9,"fishLevel":24,"oxygenTime":90,"oxygenTimeMs":90000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":2.1,"sizeScale":{"x":1,"y":1.15},"damageMultiplier":8,"healthMultiplier":12,"damageBlock":0,"damageReflection":0,"bleedReduction":0.5,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":47,"biomes":[37,38,41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"polarbear","mass":1,"boosts":3,"level":9,"fishLevel":25,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":40,"temperatureTimeMs":40000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":8,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"lamprey","mass":1,"boosts":2,"level":1,"fishLevel":26,"oxygenTime":5,"oxygenTimeMs":5000,"temperatureTime":5,"temperatureTimeMs":5000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":0.6,"sizeScale":{"x":1,"y":1.35},"damageMultiplier":2,"healthMultiplier":1.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":127,"biomes":[37,38,22,41,42,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"pelican","mass":1,"boosts":2,"level":5,"fishLevel":27,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":118,"biomes":[38,22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"whaleshark","mass":1,"boosts":4,"level":9,"fishLevel":28,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2.1,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":12,"damageBlock":0,"damageReflection":0,"bleedReduction":0.5,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"remora","mass":1,"boosts":0,"level":0,"fishLevel":29,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.4,"walkSpeedMultiplier":1.4,"jumpForceMultiplier":1,"sizeMultiplier":0.5,"sizeScale":{"x":0.5,"y":1},"damageMultiplier":5,"healthMultiplier":1.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":true,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"marlin","mass":1,"boosts":2,"level":9,"fishLevel":30,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.2,"walkSpeedMultiplier":1.2,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":0.85,"y":1},"damageMultiplier":6,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":1,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":38,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"sunfish","mass":1,"boosts":3,"level":9,"fishLevel":31,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":30,"temperatureTimeMs":30000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":3,"healthMultiplier":9,"damageBlock":0.3,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":46,"biomes":[38,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"stonefish","mass":1,"boosts":3,"level":9,"fishLevel":32,"oxygenTime":10,"oxygenTimeMs":10000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":true,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"ghost","mass":1,"boosts":0,"level":0,"fishLevel":33,"oxygenTime":0,"oxygenTimeMs":0,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1,"sizeScale":{"x":1,"y":1},"damageMultiplier":0,"healthMultiplier":1.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":63,"biomes":[37,38,22,41,42,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"crocodile","mass":1,"boosts":2,"level":9,"fishLevel":34,"oxygenTime":90,"oxygenTimeMs":90000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":7,"damageBlock":0.3,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"electriceel","mass":1,"boosts":2,"level":8,"fishLevel":35,"oxygenTime":75,"oxygenTimeMs":75000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":0.57,"y":1},"damageMultiplier":6,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"frog","mass":1,"boosts":2,"level":2,"fishLevel":36,"oxygenTime":75,"oxygenTimeMs":75000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":2,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":2,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"hippo","mass":1,"boosts":3,"level":9,"fishLevel":37,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.85,"walkSpeedMultiplier":0.85,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":8,"healthMultiplier":9,"damageBlock":0.3,"damageReflection":0,"bleedReduction":0.5,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"manatee","mass":1,"boosts":2,"level":8,"fishLevel":38,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":4,"healthMultiplier":8,"damageBlock":0.5,"damageReflection":0,"bleedReduction":0.5,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":750,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"snappingturtle","mass":1,"boosts":2,"level":7,"fishLevel":39,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":5,"damageBlock":0.4,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"piranha","mass":1,"boosts":1,"level":0,"fishLevel":40,"oxygenTime":10,"oxygenTimeMs":10000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":10,"salinityTimeMs":10000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":0.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":1.5,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":1000,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"snake","mass":1,"boosts":2,"level":6,"fishLevel":41,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":0.62,"y":1},"damageMultiplier":5.5,"healthMultiplier":6.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":true,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"baldeagle","mass":1,"boosts":3,"level":9,"fishLevel":42,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":60,"temperatureTimeMs":60000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":7.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":55,"biomes":[37,38,22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":300,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"lionfish","mass":1,"boosts":2,"level":8,"fishLevel":43,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1,"y":0.85},"damageMultiplier":5,"healthMultiplier":6.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"dragonfly","mass":1,"boosts":0,"level":0,"fishLevel":44,"oxygenTime":10,"oxygenTimeMs":10000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":0.5,"sizeScale":{"x":1,"y":1},"damageMultiplier":0,"healthMultiplier":0.1,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":6173,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"mantaray","mass":1,"boosts":2,"level":9,"fishLevel":45,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":30,"pressureTimeMs":30000,"salinityTime":30,"salinityTimeMs":30000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"elephantseal","mass":1,"boosts":3,"level":9,"fishLevel":46,"oxygenTime":120,"oxygenTimeMs":120000,"temperatureTime":30,"temperatureTimeMs":30000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":6,"healthMultiplier":10,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"lanternfish","mass":1,"boosts":0,"level":0,"fishLevel":47,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.75,"walkSpeedMultiplier":0.75,"jumpForceMultiplier":1,"sizeMultiplier":1,"sizeScale":{"x":0.86,"y":1},"damageMultiplier":0,"healthMultiplier":0.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":59,"biomes":[41,42,26],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"sleepershark","mass":1,"boosts":3,"level":9,"fishLevel":48,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":15,"temperatureTimeMs":15000,"pressureTime":45,"pressureTimeMs":45000,"salinityTime":60,"salinityTimeMs":60000,"speedMultiplier":0.8,"walkSpeedMultiplier":0.8,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1.02},"damageMultiplier":8,"healthMultiplier":10,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"gulpereel","mass":1,"boosts":2,"level":6,"fishLevel":49,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantisopod","mass":1,"boosts":2,"level":3,"fishLevel":50,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":30,"pressureTimeMs":30000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.8,"walkSpeedMultiplier":0.8,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":0.5,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantisopodclosed","mass":1,"boosts":2,"level":3,"fishLevel":51,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":30,"pressureTimeMs":30000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0,"walkSpeedMultiplier":0,"jumpForceMultiplier":1,"sizeMultiplier":0.9,"sizeScale":{"x":1,"y":0.7},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":1,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"babypenguin","mass":1,"boosts":1,"level":0,"fishLevel":52,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":1,"sizeScale":{"x":1,"y":1},"damageMultiplier":0,"healthMultiplier":0.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"seal","mass":1,"boosts":2,"level":4,"fishLevel":53,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.15,"walkSpeedMultiplier":1.15,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1,"y":0.92},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0.4,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"icefish","mass":1,"boosts":1,"level":0,"fishLevel":54,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":5,"temperatureTimeMs":5000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1,"sizeScale":{"x":1,"y":1},"damageMultiplier":1,"healthMultiplier":2,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"barreleye","mass":1,"boosts":2,"level":4,"fishLevel":55,"oxygenTime":10,"oxygenTimeMs":10000,"temperatureTime":5,"temperatureTimeMs":5000,"pressureTime":10,"pressureTimeMs":10000,"salinityTime":10,"salinityTimeMs":10000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1,"y":1.07},"damageMultiplier":3.5,"healthMultiplier":4,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"dragonfish","mass":1,"boosts":2,"level":7,"fishLevel":56,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":30,"temperatureTimeMs":30000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":10,"salinityTimeMs":10000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1.29},"damageMultiplier":6.25,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"humboldtsquid","mass":1,"boosts":2,"level":8,"fishLevel":57,"oxygenTime":10,"oxygenTimeMs":10000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":30,"pressureTimeMs":30000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":0.83,"y":1},"damageMultiplier":4,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"sealion","mass":1,"boosts":2,"level":7,"fishLevel":58,"oxygenTime":50,"oxygenTimeMs":50000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.1,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":1,"y":1.03},"damageMultiplier":6,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"flyingfish","mass":1,"boosts":2,"level":2,"fishLevel":59,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.1,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.1,"sizeScale":{"x":0.7,"y":1},"damageMultiplier":2,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"duck","mass":1,"boosts":2,"level":4,"fishLevel":60,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":4,"healthMultiplier":4.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"goblinshark","mass":1,"boosts":3,"level":9,"fishLevel":61,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":10,"salinityTimeMs":10000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":7.5,"healthMultiplier":7.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":400,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"catfish","mass":1,"boosts":1,"level":3,"fishLevel":62,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":2000,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"littleauk","mass":1,"boosts":2,"level":3,"fishLevel":63,"oxygenTime":25,"oxygenTimeMs":25000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.05,"walkSpeedMultiplier":1.05,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":0.89},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"pufferfish","mass":1,"boosts":2,"level":5,"fishLevel":64,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"pufferfishfilled","mass":1,"boosts":2,"level":5,"fishLevel":65,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1.17,"y":1},"damageMultiplier":1,"healthMultiplier":5,"damageBlock":0.6,"damageReflection":0.7,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"tigershark","mass":1,"boosts":3,"level":9,"fishLevel":66,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":10,"pressureTimeMs":10000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1.14},"damageMultiplier":8,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"lionmanejellyfish","mass":1,"boosts":3,"level":8,"fishLevel":67,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.5,"walkSpeedMultiplier":0.5,"jumpForceMultiplier":1,"sizeMultiplier":5,"sizeScale":{"x":1,"y":0.55},"damageMultiplier":4,"healthMultiplier":20,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":true,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"anaconda","mass":1,"boosts":2,"level":9,"fishLevel":68,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":0.49,"y":1},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":true,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"bobbitworm","mass":1,"boosts":2,"level":5,"fishLevel":69,"oxygenTime":5,"oxygenTimeMs":5000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":10,"pressureTimeMs":10000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.85,"walkSpeedMultiplier":0.85,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":0.66,"y":1},"damageMultiplier":3.5,"healthMultiplier":4,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.25,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":111,"biomes":[37,38,41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":true,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"mahimahi","mass":1,"boosts":2,"level":7,"fishLevel":70,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":0.93,"y":1},"damageMultiplier":5,"healthMultiplier":6,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":250,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"walrus","mass":1,"boosts":3,"level":9,"fishLevel":71,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"frilledshark","mass":1,"boosts":3,"level":8,"fishLevel":72,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.8,"walkSpeedMultiplier":0.8,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":0.53,"y":1},"damageMultiplier":4.5,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"sawfish","mass":1,"boosts":3,"level":9,"fishLevel":73,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":120,"salinityTimeMs":120000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":6.5,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":54,"biomes":[38,22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":1000,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"mantisshrimp","mass":1,"boosts":2,"level":8,"fishLevel":74,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":0.85,"y":1},"damageMultiplier":5,"healthMultiplier":6.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.75,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"axolotl","mass":1,"boosts":2,"level":3,"fishLevel":75,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":3,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"bat","mass":1,"boosts":2,"level":4,"fishLevel":76,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.15,"walkSpeedMultiplier":1.15,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":4.5,"healthMultiplier":3.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":200,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"firefly","mass":1,"boosts":0,"level":0,"fishLevel":77,"oxygenTime":5,"oxygenTimeMs":5000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":0.8,"sizeScale":{"x":1,"y":0.9},"damageMultiplier":0,"healthMultiplier":0.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":true,"canSwim":false,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"blindcavefish","mass":1,"boosts":1,"level":0,"fishLevel":78,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":0.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":1,"healthMultiplier":1.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"crayfish","mass":1,"boosts":1,"level":1,"fishLevel":79,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":1,"y":1},"damageMultiplier":2,"healthMultiplier":1.5,"damageBlock":0.5,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"goliathbullfrog","mass":1,"boosts":2,"level":5,"fishLevel":80,"oxygenTime":75,"oxygenTimeMs":75000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":2,"sizeMultiplier":1.5,"sizeScale":{"x":1,"y":0.81},"damageMultiplier":5,"healthMultiplier":5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":350,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantsalamander","mass":1,"boosts":3,"level":8,"fishLevel":81,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":0.88},"damageMultiplier":5,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"alligatorsnappingturtle","mass":1,"boosts":3,"level":9,"fishLevel":82,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":7,"damageBlock":0.35,"damageReflection":0.25,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":1500,"hasScalingBoost":true,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantsoftshellturtle","mass":1,"boosts":2,"level":9,"fishLevel":83,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":0.82},"damageMultiplier":4,"healthMultiplier":9,"damageBlock":0.3,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantsoftshellturtleclosed","mass":1,"boosts":2,"level":9,"fishLevel":84,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0,"walkSpeedMultiplier":0,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":0.79},"damageMultiplier":3,"healthMultiplier":9,"damageBlock":0.9,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"olm","mass":1,"boosts":2,"level":2,"fishLevel":85,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.2,"sizeScale":{"x":0.77,"y":1},"damageMultiplier":2,"healthMultiplier":3,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"alligatorgar","mass":1,"boosts":3,"level":9,"fishLevel":86,"oxygenTime":90,"oxygenTimeMs":90000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":60,"salinityTimeMs":60000,"speedMultiplier":1.05,"walkSpeedMultiplier":1.05,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1.2},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0.1,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.4,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":1000,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"humpbackwhale","mass":1,"boosts":3,"level":9,"fishLevel":87,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2.2,"sizeScale":{"x":1,"y":1.06},"damageMultiplier":5,"healthMultiplier":12,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":150,"hasScalingBoost":false,"ungrabbable":true,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"sardine","mass":1,"boosts":0,"level":0,"fishLevel":88,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.75,"walkSpeedMultiplier":0.75,"jumpForceMultiplier":1,"sizeMultiplier":1,"sizeScale":{"x":1,"y":1},"damageMultiplier":0,"healthMultiplier":0.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":38,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"horseshoecrab","mass":1,"boosts":2,"level":2,"fishLevel":89,"oxygenTime":0,"oxygenTimeMs":0,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1,"y":0.75},"damageMultiplier":2,"healthMultiplier":3,"damageBlock":0.5,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":38,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"baskingshark","mass":1,"boosts":3,"level":9,"fishLevel":90,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":25,"pressureTimeMs":25000,"salinityTime":15,"salinityTimeMs":15000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2.1,"sizeScale":{"x":1,"y":1.04},"damageMultiplier":7,"healthMultiplier":10,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":true,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"colossalsquid","mass":1,"boosts":3,"level":9,"fishLevel":91,"oxygenTime":10,"oxygenTimeMs":10000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":10,"pressureTimeMs":10000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.9,"walkSpeedMultiplier":0.9,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":10,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":800,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"climbingcavefish","mass":1,"boosts":1,"level":1,"fishLevel":92,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.1,"sizeScale":{"x":1,"y":1},"damageMultiplier":2,"healthMultiplier":2,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":31,"biomes":[22,26],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":300,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"archerfish","mass":1,"boosts":3,"level":5,"fishLevel":93,"oxygenTime":25,"oxygenTimeMs":25000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.1,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":4,"healthMultiplier":4.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":23,"biomes":[22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":750,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"seaotter","mass":1,"boosts":2,"level":6,"fishLevel":94,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":1,"y":0.93},"damageMultiplier":5,"healthMultiplier":5.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":39,"biomes":[37,38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"lobster","mass":1,"boosts":2,"level":5,"fishLevel":95,"oxygenTime":45,"oxygenTimeMs":45000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":4,"healthMultiplier":4,"damageBlock":0.35,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"barracuda","mass":1,"boosts":2,"level":7,"fishLevel":96,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":0.75,"y":1},"damageMultiplier":6,"healthMultiplier":6.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":750,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"frogfish","mass":1,"boosts":2,"level":6,"fishLevel":97,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.5,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.6,"sizeScale":{"x":1,"y":0.82},"damageMultiplier":5,"healthMultiplier":5.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":true,"walkingAbilityLoadTime":250},{"name":"morayeel","mass":1,"boosts":3,"level":9,"fishLevel":98,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1.1,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":0.55,"y":1},"damageMultiplier":7.5,"healthMultiplier":7.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"wobbegongshark","mass":1,"boosts":3,"level":8,"fishLevel":99,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":1,"y":1.03},"damageMultiplier":6.5,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.4,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":400,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"leatherbackturtle","mass":1,"boosts":3,"level":9,"fishLevel":100,"oxygenTime":110,"oxygenTimeMs":110000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":6.5,"healthMultiplier":8.5,"damageBlock":0.3,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":110,"biomes":[38,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":750,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"threshershark","mass":1,"boosts":3,"level":9,"fishLevel":101,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":750,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"atlantictorpedo","mass":1,"boosts":2,"level":9,"fishLevel":102,"oxygenTime":80,"oxygenTimeMs":80000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":0.93},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":1000,"hasScalingBoost":true,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"coconutcrab","mass":1,"boosts":3,"level":9,"fishLevel":103,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.6,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.6,"sizeScale":{"x":1.4,"y":0.79},"damageMultiplier":7,"healthMultiplier":7,"damageBlock":0.35,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":true,"canClimb":true,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":true,"walkingAbilityLoadTime":250},{"name":"bullshark","mass":1,"boosts":3,"level":9,"fishLevel":104,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":0.99},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.4,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":54,"biomes":[38,22],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"hermitcrab","mass":1,"boosts":2,"level":3,"fishLevel":105,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1.1,"jumpForceMultiplier":1,"sizeMultiplier":1.1,"sizeScale":{"x":1,"y":0.86},"damageMultiplier":2.5,"healthMultiplier":2.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":true,"poisonResistant":false,"habitat":110,"biomes":[38,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":true,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":true,"walkingAbilityLoadTime":250},{"name":"giantpacificoctopus","mass":1,"boosts":3,"level":9,"fishLevel":106,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":60,"temperatureTimeMs":60000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":1,"y":1},"damageMultiplier":9,"healthMultiplier":7.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.25,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"beakedwhale","mass":1,"boosts":3,"level":9,"fishLevel":107,"oxygenTime":140,"oxygenTimeMs":140000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":9,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":47,"biomes":[37,38,41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":750,"hasScalingBoost":true,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"megamouthshark","mass":1,"boosts":3,"level":9,"fishLevel":108,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":10,"salinityTimeMs":10000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":10,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"belugawhale","mass":1,"boosts":3,"level":8,"fishLevel":109,"oxygenTime":60,"oxygenTimeMs":60000,"temperatureTime":30,"temperatureTimeMs":30000,"pressureTime":60,"pressureTimeMs":60000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":600,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"vampiresquid","mass":1,"boosts":2,"level":4,"fishLevel":110,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":20,"pressureTimeMs":20000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1,"y":1},"damageMultiplier":4,"healthMultiplier":3.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"halibut","mass":1,"boosts":3,"level":9,"fishLevel":111,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":1},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":600,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"bowheadwhale","mass":1,"boosts":3,"level":9,"fishLevel":112,"oxygenTime":75,"oxygenTimeMs":75000,"temperatureTime":20,"temperatureTimeMs":20000,"pressureTime":10,"pressureTimeMs":10000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":2.2,"sizeScale":{"x":1,"y":0.95},"damageMultiplier":5,"healthMultiplier":11,"damageBlock":0,"damageReflection":0,"bleedReduction":0.5,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":true,"canClimb":false,"poisonResistant":false,"habitat":37,"biomes":[37],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":true,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"japanesespidercrab","mass":1,"boosts":3,"level":9,"fishLevel":113,"oxygenTime":30,"oxygenTimeMs":30000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":30,"pressureTimeMs":30000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.6,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.6,"sizeScale":{"x":1.1,"y":0.73},"damageMultiplier":6,"healthMultiplier":8,"damageBlock":0.25,"damageReflection":0.15,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":true,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":true,"hasWalkingAbility":true,"walkingAbilityLoadTime":250},{"name":"cookiecuttershark","mass":1,"boosts":2,"level":5,"fishLevel":114,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":60,"pressureTimeMs":60000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":0.8,"y":1},"damageMultiplier":4,"healthMultiplier":4.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":300,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"sarcasticfringehead","mass":1,"boosts":2,"level":5,"fishLevel":115,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":15,"salinityTimeMs":15000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.4,"sizeScale":{"x":1,"y":1},"damageMultiplier":5,"healthMultiplier":4.5,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"parrotfish","mass":1,"boosts":2,"level":4,"fishLevel":116,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":15,"salinityTimeMs":15000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.3,"sizeScale":{"x":1,"y":0.97},"damageMultiplier":3.5,"healthMultiplier":4,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.5,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"wolfeel","mass":1,"boosts":2,"level":8,"fishLevel":117,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":30,"temperatureTimeMs":30000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.7,"sizeScale":{"x":0.64,"y":1},"damageMultiplier":7,"healthMultiplier":7,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.3,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":45,"biomes":[37,41],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":600,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"giantsiphonophore","mass":1,"boosts":2,"level":8,"fishLevel":118,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":0.55,"walkSpeedMultiplier":0.55,"jumpForceMultiplier":1,"sizeMultiplier":2.1,"sizeScale":{"x":1.25,"y":1},"damageMultiplier":0,"healthMultiplier":10,"damageBlock":0,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":41,"biomes":[41],"collisionCategory":1,"collisionMask":7935,"chooseable":false,"hasSecondaryAbility":false,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":true,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"coelacanth","mass":1,"boosts":3,"level":9,"fishLevel":119,"oxygenTime":20,"oxygenTimeMs":20000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":30,"pressureTimeMs":30000,"salinityTime":20,"salinityTimeMs":20000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.8,"sizeScale":{"x":0.94,"y":1},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0.2,"damageReflection":0,"bleedReduction":0,"armorPenetration":0,"poisonResistance":0,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":43,"biomes":[41,42],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":250,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250},{"name":"napoleonwrasse","mass":1,"boosts":3,"level":9,"fishLevel":120,"oxygenTime":15,"oxygenTimeMs":15000,"temperatureTime":10,"temperatureTimeMs":10000,"pressureTime":5,"pressureTimeMs":5000,"salinityTime":30,"salinityTimeMs":30000,"speedMultiplier":1,"walkSpeedMultiplier":1,"jumpForceMultiplier":1,"sizeMultiplier":1.9,"sizeScale":{"x":1,"y":0.9},"damageMultiplier":7,"healthMultiplier":8,"damageBlock":0.15,"damageReflection":0,"bleedReduction":0,"armorPenetration":0.15,"poisonResistance":0.2,"permanentEffects":0,"canFly":false,"canSwim":true,"canStand":false,"needsAir":false,"canClimb":false,"poisonResistant":false,"habitat":102,"biomes":[38],"collisionCategory":1,"collisionMask":7935,"chooseable":true,"hasSecondaryAbility":true,"secondaryAbilityLoadTime":500,"hasScalingBoost":false,"ungrabbable":false,"canDig":false,"canWalkUnderwater":false,"hasWalkingAbility":false,"walkingAbilityLoadTime":250}]`);

const treeAnimalRelations = [
    // Tier 1
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "lamprey"
            ]
        },
        {
            stringId: "worm",
            evolvesTo: [
                "crayfish",
                "lamprey"
            ]
        },
        {
            stringId: "blindcavefish",
            evolvesTo: [
                "climbingcavefish",
                "crayfish"
            ]
        },
        {
            stringId: "blobfish",
            evolvesTo: [
                "kingcrab"
            ]
        },
        {
            stringId: "icefish",
            evolvesTo: [
                "kingcrab"
            ]
        },
        {
            stringId: "fish",
            evolvesTo: [
                "crab"
            ]
        },

    ],
    // Tier 2
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "lamprey",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "crayfish",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "climbingcavefish",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "kingcrab",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "crab",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
    ],
    // Tier 3
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "frog",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "olm",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "horseshoecrab",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "flyingfish",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "jellyfish",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
    ],
    // Tier 4
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "catfish",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "axolotl",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "giantisopod",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "squid",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "littleauk",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "hermitcrab",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
    ],
    // Tier 5
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "duck",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "bat",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "barreleye",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "vampiresquid",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "parrotfish",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "seal",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "seagull",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
    ],
    // Tier 6
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "goliathbullfrog",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "archerfish",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "bobbitworm",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "cookiecuttershark",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "pufferfish",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "sarcasticfringehead",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "ray",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "pelican",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "lobster",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
    ],
    // Tier 7
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "seal"
            ]
        },
        {
            stringId: "snake",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "beaver",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "anglerfish",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "seaotter",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "gulpereel",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "penguin",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "frogfish",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
    ],
    // Tier 8
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "manatee"
            ]
        },
        {
            stringId: "snappingturtle",
            evolvesTo: [
                "manatee",
                "giantsalamander",
                "electriceel"
            ]
        },
        {
            stringId: "dragonfish",
            evolvesTo: [
                "frilledshark",
                "oarfish",
                "wolfeel"
            ]
        },
        {
            stringId: "barracuda",
            evolvesTo: [
                "lionfish",
                "tshark",
                "wobbegongshark"
            ]
        },
        {
            stringId: "octopus",
            evolvesTo: [
                "humboldtsquid",
                "mantisshrimp"
            ]
        },
        {
            stringId: "mahimahi",
            evolvesTo: [
                "dolphin",
                "seaturtle"
            ]
        },
        {
            stringId: "sealion",
            evolvesTo: [
                "narwhal",
                "leopardseal",
                "belugawhale"
            ]
        }
    ],
    // Tier 9
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha"
            ]
        },
        {
            stringId: "manatee",
            evolvesTo: [
                "hippo",
                "crocodile",
                "baldeagle"
            ]
        },
        {
            stringId: "giantsalamander",
            evolvesTo: [
                "giantsoftshellturtle",
                "alligatorsnappingturtle",
                "anaconda"
            ]
        },
        {
            stringId: "electriceel",
            evolvesTo: [
                "sawfish",
                "alligatorgar"
            ]
        },
        {
            stringId: "frilledshark",
            evolvesTo: [
                "megamouthshark",
                "sleepershark",
                "goblinshark"
            ]
        },
        {
            stringId: "oarfish",
            evolvesTo: [
                "sunfish",
                "mantaray"
            ]
        },
        {
            stringId: "wolfeel",
            evolvesTo: [
                "coelacanth",
                "halibut"
            ]
        },
        {
            stringId: "lionfish",
            evolvesTo: [
                "atlantictorpedo",
                "stonefish",
                "morayeel"
            ]
        },
        {
            stringId: "tshark",
            evolvesTo: [
                "bullshark",
                "threshershark",
                "shark"
            ]
        },
        {
            stringId: "wobbegongshark",
            evolvesTo: [
                "tigershark",
                "baskingshark",
                "whaleshark"
            ]
        },
        {
            stringId: "humboldtsquid",
            evolvesTo: [
                "giantpacificoctopus",
                "colossalsquid",
                "giantsquid",
            ]
        },
        {
            stringId: "mantisshrimp",
            evolvesTo: [
                "japanesespidercrab",
                "coconutcrab"
            ]
        },
        {
            stringId: "dolphin",
            evolvesTo: [
                "killerwhale",
                "marlin"
            ]
        },
        {
            stringId: "seaturtle",
            evolvesTo: [
                "leatherbackturtle",
                "napoleonwrasse"
            ]
        },
        {
            stringId: "narwhal",
            evolvesTo: [
                "beakedwhale",
                "cachalot"
            ]
        },
        {
            stringId: "leopardseal",
            evolvesTo: [
                "polarbear",
                "elephantseal",
                "walrus"
            ]
        },
        {
            stringId: "belugawhale",
            evolvesTo: [
                "humpbackwhale",
                "whale",
                "bowheadwhale"
            ]
        }
    ],
    // Tier 10
    [
        {
            stringId: "piranha",
            evolvesTo: []
        },
        {
            stringId: "hippo",
            evolvesTo: []
        },
        {
            stringId: "crocodile",
            evolvesTo: []
        },
        {
            stringId: "baldeagle",
            evolvesTo: []
        },
        {
            stringId: "giantsoftshellturtle",
            evolvesTo: []
        },
        {
            stringId: "alligatorsnappingturtle",
            evolvesTo: []
        },
        {
            stringId: "anaconda",
            evolvesTo: []
        },
        {
            stringId: "sawfish",
            evolvesTo: []
        },
        {
            stringId: "alligatorgar",
            evolvesTo: []
        },
        {
            stringId: "megamouthshark",
            evolvesTo: []
        },
        {
            stringId: "sleepershark",
            evolvesTo: []
        },
        {
            stringId: "goblinshark",
            evolvesTo: []
        },
        {
            stringId: "sunfish",
            evolvesTo: []
        },
        {
            stringId: "mantaray",
            evolvesTo: []
        },
        {
            stringId: "coelacanth",
            evolvesTo: []
        },
        {
            stringId: "halibut",
            evolvesTo: []
        },
        {
            stringId: "atlantictorpedo",
            evolvesTo: []
        },
        {
            stringId: "stonefish",
            evolvesTo: []
        },
        {
            stringId: "morayeel",
            evolvesTo: []
        },
        {
            stringId: "bullshark",
            evolvesTo: []
        },
        {
            stringId: "threshershark",
            evolvesTo: []
        },
        {
            stringId: "shark",
            evolvesTo: []
        },
        {
            stringId: "tigershark",
            evolvesTo: []
        },
        {
            stringId: "baskingshark",
            evolvesTo: []
        },
        {
            stringId: "whaleshark",
            evolvesTo: []
        },
        {
            stringId: "giantpacificoctopus",
            evolvesTo: []
        },
        {
            stringId: "colossalsquid",
            evolvesTo: []
        },
        {
            stringId: "giantsquid",
            evolvesTo: []
        },
        {
            stringId: "japanesespidercrab",
            evolvesTo: []
        },
        {
            stringId: "coconutcrab",
            evolvesTo: []
        },
        {
            stringId: "killerwhale",
            evolvesTo: []
        },
        {
            stringId: "marlin",
            evolvesTo: []
        },
        {
            stringId: "leatherbackturtle",
            evolvesTo: []
        },
        {
            stringId: "napoleonwrasse",
            evolvesTo: []
        },
        {
            stringId: "beakedwhale",
            evolvesTo: []
        },
        {
            stringId: "cachalot",
            evolvesTo: []
        },
        {
            stringId: "polarbear",
            evolvesTo: []
        },
        {
            stringId: "elephantseal",
            evolvesTo: []
        },
        {
            stringId: "walrus",
            evolvesTo: []
        },
        {
            stringId: "humpbackwhale",
            evolvesTo: []
        },
        {
            stringId: "whale",
            evolvesTo: []
        },
        {
            stringId: "bowheadwhale",
            evolvesTo: []
        },
    ]
];

const treeAnimalRelationsProcessed = [
    // Tier 1
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "lamprey"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "worm",
            evolvesTo: [
                "crayfish",
                "lamprey"
            ]
        },
        {
            stringId: "blindcavefish",
            evolvesTo: [
                "climbingcavefish",
                "crayfish"
            ]
        },
        {
            stringId: "blobfish",
            evolvesTo: [
                "kingcrab"
            ]
        },
        {
            stringId: "icefish",
            evolvesTo: [
                "kingcrab"
            ]
        },
        {
            stringId: "fish",
            evolvesTo: [
                "crab"
            ]
        },

    ],
    // Tier 2
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "lamprey",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "crayfish",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "climbingcavefish",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "kingcrab",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "crab",
            evolvesTo: [
                "frog",
                "olm",
                "horseshoecrab",
                "flyingfish",
                "jellyfish"
            ]
        },
    ],
    // Tier 3
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "frog",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "olm",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "horseshoecrab",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "flyingfish",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
        {
            stringId: "jellyfish",
            evolvesTo: [
                "catfish",
                "axolotl",
                "giantisopod",
                "squid",
                "littleauk",
                "hermitcrab"
            ]
        },
    ],
    // Tier 4
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "catfish",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "axolotl",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "giantisopod",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "squid",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "littleauk",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
        {
            stringId: "hermitcrab",
            evolvesTo: [
                "duck",
                "bat",
                "barreleye",
                "vampiresquid",
                "parrotfish",
                "seal",
                "seagull"
            ]
        },
    ],
    // Tier 5
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "duck",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "bat",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "barreleye",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "vampiresquid",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "parrotfish",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "seal",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
        {
            stringId: "seagull",
            evolvesTo: [
                "goliathbullfrog",
                "archerfish",
                "bobbitworm",
                "cookiecuttershark",
                "pufferfish",
                "sarcasticfringehead",
                "ray",
                "pelican",
                "lobster"
            ]
        },
    ],
    // Tier 6
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "goliathbullfrog",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "archerfish",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "bobbitworm",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "cookiecuttershark",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "pufferfish",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "sarcasticfringehead",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "ray",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "pelican",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
        {
            stringId: "lobster",
            evolvesTo: [
                "snake",
                "beaver",
                "anglerfish",
                "otter",
                "gulpereel",
                "penguin",
                "frogfish"
            ]
        },
    ],
    // Tier 7
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "snake",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "beaver",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "anglerfish",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "seaotter",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "gulpereel",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "penguin",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
        {
            stringId: "frogfish",
            evolvesTo: [
                "snappingturtle",
                "dragonfish",
                "barracuda",
                "octopus",
                "mahimahi",
                "sealion"
            ]
        },
    ],
    // Tier 8
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha",
                "manatee"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "snappingturtle",
            evolvesTo: [
                "manatee",
                "giantsalamander",
                "electriceel"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "dragonfish",
            evolvesTo: [
                "frilledshark",
                "oarfish",
                "wolfeel"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "barracuda",
            evolvesTo: [
                "lionfish",
                "tshark",
                "wobbegongshark"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "octopus",
            evolvesTo: [
                "humboldtsquid",
                "mantisshrimp"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "mahimahi",
            evolvesTo: [
                "dolphin",
                "seaturtle"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "sealion",
            evolvesTo: [
                "narwhal",
                "leopardseal",
                "beluga"
            ]
        },
        {
            stringId: "void",
            evolvesTo: []
        },
    ],
    // Tier 9
    [
        {
            stringId: "piranha",
            evolvesTo: [
                "piranha"
            ]
        },
        {
            stringId: "manatee",
            evolvesTo: [
                "hippo",
                "crocodile",
                "eagle"
            ]
        },
        {
            stringId: "giantsalamander",
            evolvesTo: [
                "giantsoftshellturtle",
                "alligatorsnappingturtle",
                "anaconda"
            ]
        },
        {
            stringId: "electriceel",
            evolvesTo: [
                "sawfish",
                "alligatorgar"
            ]
        },
        {
            stringId: "frilledshark",
            evolvesTo: [
                "megamouthshark",
                "sleepershark",
                "goblinshark"
            ]
        },
        {
            stringId: "oarfish",
            evolvesTo: [
                "sunfish",
                "mantaray"
            ]
        },
        {
            stringId: "wolfeel",
            evolvesTo: [
                "coelacanth",
                "halibut"
            ]
        },
        {
            stringId: "lionfish",
            evolvesTo: [
                "atlantictorpedo",
                "stonefish",
                "morayeel"
            ]
        },
        {
            stringId: "tshark",
            evolvesTo: [
                "bullshark",
                "threshershark",
                "shark"
            ]
        },
        {
            stringId: "wobbegongshark",
            evolvesTo: [
                "tigershark",
                "baskingshark",
                "whaleshark"
            ]
        },
        {
            stringId: "humboldtsquid",
            evolvesTo: [
                "giantpacificoctopus",
                "colossalsquid",
                "giantsquid",
            ]
        },
        {
            stringId: "mantisshrimp",
            evolvesTo: [
                "japanesespidercrab",
                "coconutcrab"
            ]
        },
        {
            stringId: "dolphin",
            evolvesTo: [
                "killerwhale",
                "marlin"
            ]
        },
        {
            stringId: "seaturtle",
            evolvesTo: [
                "leatherbackturtle",
                "napoleonwrasse"
            ]
        },
        {
            stringId: "narwhal",
            evolvesTo: [
                "beakedwhale",
                "cachalot"
            ]
        },
        {
            stringId: "leopardseal",
            evolvesTo: [
                "polarbear",
                "elephantseal",
                "walrus"
            ]
        },
        {
            stringId: "belugawhale",
            evolvesTo: [
                "humpbackwhale",
                "whale",
                "bowheadwhale"
            ]
        }
    ],
    // Tier 10 1
    [
        {
            stringId: "piranha",
            evolvesTo: []
        },
        {
            stringId: "hippo",
            evolvesTo: []
        },
        {
            stringId: "giantsoftshellturtle",
            evolvesTo: []
        },
        {
            stringId: "sawfish",
            evolvesTo: []
        },
        {
            stringId: "megamouthshark",
            evolvesTo: []
        },
        {
            stringId: "sunfish",
            evolvesTo: []
        },
        {
            stringId: "coelacanth",
            evolvesTo: []
        },
        {
            stringId: "atlantictorpedo",
            evolvesTo: []
        },
        {
            stringId: "bullshark",
            evolvesTo: []
        },
        {
            stringId: "tigershark",
            evolvesTo: []
        },
        {
            stringId: "giantpacificoctopus",
            evolvesTo: []
        },
        {
            stringId: "japanesespidercrab",
            evolvesTo: []
        },
        {
            stringId: "killerwhale",
            evolvesTo: []
        },
        {
            stringId: "leatherbackturtle",
            evolvesTo: []
        },
        {
            stringId: "beakedwhale",
            evolvesTo: []
        },
        {
            stringId: "polarbear",
            evolvesTo: []
        },
        {
            stringId: "humpbackwhale",
            evolvesTo: []
        },
    ],
    // Tier 10 2
    [
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "crocodile",
            evolvesTo: []
        },
        {
            stringId: "alligatorsnappingturtle",
            evolvesTo: []
        },
        {
            stringId: "alligatorgar",
            evolvesTo: []
        },
        {
            stringId: "sleepershark",
            evolvesTo: []
        },
        {
            stringId: "mantaray",
            evolvesTo: []
        },
        {
            stringId: "halibut",
            evolvesTo: []
        },
        {
            stringId: "stonefish",
            evolvesTo: []
        },
        {
            stringId: "threshershark",
            evolvesTo: []
        },
        {
            stringId: "baskingshark",
            evolvesTo: []
        },
        {
            stringId: "colossalsquid",
            evolvesTo: []
        },
        {
            stringId: "coconutcrab",
            evolvesTo: []
        },
        {
            stringId: "marlin",
            evolvesTo: []
        },
        {
            stringId: "napoleonwrasse",
            evolvesTo: []
        },
        {
            stringId: "cachalot",
            evolvesTo: []
        },
        {
            stringId: "elephantseal",
            evolvesTo: []
        },
        {
            stringId: "whale",
            evolvesTo: []
        },
    ],
    // Tier 10 3
    [
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "baldeagle",
            evolvesTo: []
        },
        {
            stringId: "anaconda",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "goblinshark",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "morayeel",
            evolvesTo: []
        },
        {
            stringId: "shark",
            evolvesTo: []
        },
        {
            stringId: "whaleshark",
            evolvesTo: []
        },
        {
            stringId: "giantsquid",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "void",
            evolvesTo: []
        },
        {
            stringId: "walrus",
            evolvesTo: []
        },
        {
            stringId: "bowheadwhale",
            evolvesTo: []
        },
    ],
];

const treeAnimalLines = [
    // Tier 1
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "hcwfm-left-top",
            "hcw-left",
            "hcwfm-left-top",
            "hcw-left",
            "left",
            "left-top",
            "left"
        ],
        [
            "left-right",
            "left",
            "left",
            "left",
            "void",
            "left"
        ],
    ],

    // Tier 2
    [
        [
            "hcw-left-right",
            "hcwfm-left-top",
            "left-top",
            "left-top",
            "left-top",
            "top",
            "left-top"
        ],
        [
            "right",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],

    // Tier 3
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "top"
        ],
        [
            "right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],

    // Tier 4
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "top"
        ],
        [
            "right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],

    // Tier 5
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "top",
            "top"
        ],
        [
            "right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],

    // Tier 6
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top"
        ],
        [
            "right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],

    // Tier 7
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "left-top",
            "top",
            "top",
            "top",
            "top",
            "top",
            "top",
            "top",
        ],
        [
            "right",
            "left",
            "void",
            "void",
            "left",
            "void",
            "void",
            "left",
            "void",
            "left",
            "void",
            "left",
            "void",
            "void",
            "left"
        ],
    ],

    // Tier 8
    [
        [
            "hcw-left-right",
            "hcwfm-top",
            "left-top",
            "top",
            "void",
            "left-top",
            "top",
            "void",
            "left-top",
            "top",
            "left",
            "top",
            "left",
            "top",
            "void",
            "left-top",
            "top"
        ],
        [
            "left-right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],

    // Tier 9
    [
        [
            "left-right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
        [
            "left-right",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left",
            "left"
        ],
    ],
];

const treeAnimalRelationsLongest = treeAnimalRelationsProcessed.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
).length;
(async () => {
    class Habitat {
        NAMES = ['Cold', 'Warm', 'Shallow', 'Deep', 'Fresh', 'Salt', 'Reef'];
        MAX = Math.pow(2, this.NAMES.length) - 1;

        constructor(num) {
            this.habitatNum = num;
        }

        convertToBase(num, base) {
            let conversion = [];
            let power, quotient, remainder = 0;
            if (num === 0) {
                conversion = [0];
            } else {
                power = Math.floor(Math.log(num) / Math.log(base));
                while (power >= 0) {
                    quotient = Math.floor(num / Math.pow(base, power));
                    remainder = num % Math.pow(base, power);
                    conversion.unshift(quotient);
                    num = remainder;
                    power--;
                }
            }
            return conversion;
        }

        convertToList() {
            const conversion = this.convertToBase(Math.floor(this.habitatNum), 2);
            const length = conversion.length;
            let partialDisplay = [];
            for (let index = 0; index < length; index += 2) {
                let str = "";
                let nextFlag = false;
                let nextName = "";
                let nextIndex = index + 1;
                let currentFlag = conversion[index];
                let currentName = currentFlag ? this.NAMES[index] : false;

                if (nextIndex >= length) {
                    nextFlag = false
                } else nextFlag = conversion[nextIndex];

                nextName = nextFlag ? this.NAMES[nextIndex] : false;

                if (currentName && nextName) {
                    str = `${currentName}/${nextName}`;
                } else str = currentName || nextName;

                if (str) {
                    partialDisplay.push(str);
                }
            }
            return partialDisplay;
        }

        hasReef() {
            return this.habitatNum >= Math.pow(2, this.NAMES.length - 1)
        }
    }

    const translations = await fetch("https://api.crowdl.io/deeeep/cdn/en.json")
        .then(res => res.json());

    for (let i in treeAnimalRelationsProcessed) {
        const row = document.createElement("div");
        row.classList.add("drc-tree-row");

        const placeholder = document.createElement("div");
        row.appendChild(placeholder);


        for (let j = 0; j < treeAnimalRelationsLongest; j++) {
            if (j >= treeAnimalRelationsProcessed[i].length) {
                const animalElem = document.createElement("div");
                animalElem.classList.add("drc-tree-void");
                row.insertBefore(animalElem, row.firstElementChild);
                //row.appendChild(animalElem);
                continue;
            }

            if (treeAnimalRelationsProcessed[i][j].stringId === "void") {
                const animalElem = document.createElement("div");
                animalElem.classList.add("drc-tree-void");
                row.insertBefore(animalElem, row.firstElementChild);
                //row.appendChild(animalElem);
                continue;
            }

            const animalId = treeAnimalRelationsProcessed[i][j].stringId;
            const animalStat = animalStatData.filter((stat) => stat.name === animalId)[0];
            const animalHabitat = new Habitat(animalStat.habitat);

            const animalElem = document.createElement("div");
            animalElem.classList.add("drc-tree-choice");
            animalElem.setAttribute("data-drc-tree", "drc-tree-animal-" + animalId);

            if (Number(i) > 8) {
                animalElem.classList.add("drc-tree-choice-t10");
            }

            const imageWrapperElem = document.createElement("div");
            imageWrapperElem.classList.add("drc-tree-image");

            const imageElem = document.createElement("img");
            imageElem.classList.add("drc-tree-image-inner");
            imageElem.setAttribute("src", "https://beta.deeeep.io/assets/characters/" + animalId + ".png");

            imageWrapperElem.appendChild(imageElem);
            animalElem.appendChild(imageWrapperElem);

            row.insertBefore(animalElem, row.firstElementChild);
            //row.appendChild(animalElem);

            if (Number(i) > 6) {
                let evolvesTo = [];
                // Evolves to 
                if (Number(i) < 9) {
                    let nextTier = [];
                    treeAnimalRelationsProcessed[i][j].evolvesTo.forEach(str => {
                        const a = treeAnimalRelations[Number(i) + 1]
                            .filter((animal) => {
                                return animal.stringId === str;
                            });
                        evolvesTo.push(a[0] ?? treeAnimalRelations[0][0]);
                        nextTier.push(a[0] ?? treeAnimalRelations[0][0]);
                    });
                    if (Number(i) === 7) {
                        for (let y in nextTier) {
                            nextTier[y].evolvesTo.forEach((str) => {
                                const a = treeAnimalRelations[Number(i) + 2]
                                    .filter((animal) => {
                                        return animal.stringId === str;
                                    });
                                evolvesTo.push(a[0] ?? treeAnimalRelations[0][0]);
                                nextTier.push(a[0] ?? treeAnimalRelations[0][0]);
                            });
                        }
                    }
                }


                // Evolves into
                if (Number(i) > 7) {
                    let nextTier  = [];
                    treeAnimalRelations[Number(i) > 8 ? 8 : 7].forEach(animal => {
                        if (!animal.evolvesTo.includes(animalId)) return;
                        evolvesTo.push(animal);
                        nextTier.push(animal.stringId);
                    });
                    if (Number(i) > 8) {
                        for (let y in nextTier) {
                            treeAnimalRelations[7].forEach((animal) => {
                                if (!animal.evolvesTo.includes(nextTier[y])) return;
                                evolvesTo.push(animal);
                                nextTier.push(animal);
                            });
                        }
                    }
                }

                animalElem.addEventListener("mouseover", () => {
                    for (let x in evolvesTo) {
                        document.querySelectorAll("div[data-drc-tree=" + "drc-tree-animal-" + evolvesTo[x].stringId + "]")
                            .forEach(elem => {
                                elem?.classList.add("drc-tree-choice-semiselected");
                            });
                    }
                });

                animalElem.addEventListener("mouseleave", () => {
                    for (let x in evolvesTo) {
                        document.querySelectorAll("div[data-drc-tree=" + "drc-tree-animal-" + evolvesTo[x].stringId + "]")
                            .forEach(elem => {
                                elem?.classList.remove("drc-tree-choice-semiselected");
                            });
                    }
                });
            }

            const tooltip = `
<div class="drc-animal-info">
<h4 class="drc-animal-title" style="margin: 0;">${translations[animalId + "-name"]}</h4>
<div class="drc-animal-stats">
    <div class="drc-animal-stat">
        <div class="drc-animal-image-icon">
            <img src="https://beta.deeeep.io/img/stats/health.png" class="drc-animal-image-inner"
                style="object-fit: contain;">
            </div>
            <span class="drc-animal-value drc-text-green">${animalStat.healthMultiplier * 100}</span>
    </div>
    <div class="drc-animal-stat">
        <div class="drc-animal-image-icon">
            <img src="https://beta.deeeep.io/img/stats/damage.png" class="drc-animal-image-inner"
                style="object-fit: contain;">
            </div>
            <span class="drc-animal-value drc-text-red">${animalStat.damageMultiplier * 20}</span>
    </div>
    <div class="drc-animal-stat">
        <div class="drc-animal-image-icon">
            <img src="https://beta.deeeep.io/img/stats/speed.png" class="drc-animal-image-inner"
                style="object-fit: contain;">
            </div>
            <span class="drc-animal-value drc-text-cyan">${Math.ceil(animalStat.speedMultiplier * 100)}</span>
    </div>
    <div class="drc-animal-stat">
        <div class="drc-animal-image-icon">
            <img src="https://beta.deeeep.io/img/stats/shieldstat.png" class="drc-animal-image-inner"
                style="object-fit: contain;">
            </div>
            <span class="drc-animal-value">${animalStat.damageBlock * 100}</span>
    </div>
</div>
<div class="drc-animal-font-normal">Habitat</div>
<span class="drc-animal-habitat">${animalHabitat.convertToList().toString().replaceAll(',', ", ")}</span>
<div class="drc-animal-font-normal">Summary</div>
<span class="drc-animal-summary">"Coming soon"</span>
</div>
`;
            tippy(animalElem, {
                content: tooltip,
                allowHTML: true,
                zIndex: 99999,
                duration: [0, 0],
                offset: [0, 15]
            });
        }

        treeModalMain?.insertBefore(row, treeModalMain.firstElementChild);

        if (Number(i) > treeAnimalLines.length - 1) continue;
        for (let j in treeAnimalLines[i]) {
            const lineRow = document.createElement("div");
            lineRow.classList.add("drc-tree-row");

            const linePlaceholder = document.createElement("div");
            lineRow.appendChild(linePlaceholder);

            const beginLineElem = document.createElement("div");
            beginLineElem.classList.add("drc-tree-line-begin");
            lineRow.insertBefore(beginLineElem, lineRow.firstElementChild);

            for (let x in treeAnimalLines[i][j]) {
                const lineElem = document.createElement("div");
                lineElem.classList.add("drc-tree-line");
                lineElem.classList.add("drc-tree-line-" + treeAnimalLines[i][j][x]);

                lineRow.insertBefore(lineElem, lineRow.firstElementChild);
            }

            treeModalMain?.insertBefore(lineRow, treeModalMain.firstElementChild);
        }

        //treeModalMain?.appendChild(row);
    }
})();