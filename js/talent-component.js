/**
 * Created by Sergio Masellis on 6/9/2017.
 */

xtag.register('x-talent', {
    lifecycle: {
        inserted: function(){

            this.innerHTML = '<div class="talent-container talent-affliction"></div>';
            // used to select current spec
            var selectedSpec = this.getAttribute('spec') || "Affliction";
            var selectedTalents = this.getAttribute('talent') || "0000000";
            var talentId = Math.floor(Math.random() * 1000);
            this.id = "tid"+talentId;

            var container = document.querySelector("#"+this.id+' .talent-container');
            var data = {
                Affliction: [],
                Demonology: [],
                Destruction: [],
                BFADemonology: []
            };

            // Affliction Specs
            data.Affliction[15] = [
                {
                    name: 'Haunt',
                    url: 'http://www.wowdb.com/spells/48181',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_haunt.jpg'
                },
                {
                    name: 'Writhe in Agony',
                    url: 'http://www.wowdb.com/spells/196102',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_curseofsargeras.jpg'
                },
                {
                    name: 'Malefic Grasp',
                    url: 'http://www.wowdb.com/spells/235155',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_everlastingaffliction.jpg'
                },
            ];
            data.Affliction[30] = [
                {
                    name: 'Contagion',
                    url: 'http://www.wowdb.com/spells/196105-contagion',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_creature_disease_03.jpg'
                },
                {
                    name: 'Absolute Corruption',
                    url: 'http://www.wowdb.com/spells/196103-absolute-corruption',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_bossmannoroth_empoweredmannorothsgaze.jpg'
                },
                {
                    name: 'Empowered Life Tap',
                    url: 'http://ptr.wowdb.com/spells/235157-empowered-life-tap',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_manafeed.jpg'
                },
            ];
            data.Affliction[45] = [
                {
                    name: 'Demonic Circle',
                    url: 'http://www.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Howl of Terror',
                    url: 'http://www.wowdb.com/spells/5484-howl-of-terror',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_howlofterror.jpg'
                },
            ];
            data.Affliction[60] = [
                {
                    name: 'Phantom Singularity',
                    url: 'http://www.wowdb.com/spells/205179-phantom-singularity',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/inv_enchant_voidsphere.jpg'
                },
                {
                    name: 'Sow the Seeds',
                    url: 'http://www.wowdb.com/spells/196226-sow-the-seeds',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_seedofdestruction.jpg'
                },
                {
                    name: 'Soul Harvest',
                    url: 'http://www.wowdb.com/spells/196098-soul-harvest',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonsoul.jpg'
                },
            ];
            data.Affliction[75] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.Affliction[90] = [
                {
                    name: 'Grimoire of Supremacy',
                    url: 'http://www.wowdb.com/spells/152107-grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://www.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofservice.jpg'
                },
                {
                    name: 'Grimoire of Sacrifice',
                    url: 'http://www.wowdb.com/spells/108503-grimoire-of-sacrifice',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.Affliction[100] = [
                {
                    name: 'Death\'s Embrace',
                    url: 'http://ptr.wowdb.com/spells/234876-deaths-embrace',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/24287/large/spell_shadow_deathsembrace.jpg'
                },
                {
                    name: 'Siphon Life',
                    url: 'http://www.wowdb.com/spells/63106-siphon-life',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_requiem.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://www.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
            ];

            // Demonlogy
            data.Demonology[15] = [
                {
                    name: 'Shadowy Inspiration',
                    url: 'http://www.wowdb.com/spells/196269-shadowy-inspiration',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_curse_shadow.jpg'
                },
                {
                    name: 'Shadowflame',
                    url: 'http://www.wowdb.com/spells/205181-shadowflame',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowflame.jpg'
                },
                {
                    name: 'Demonic Calling',
                    url: 'http://www.wowdb.com/spells/205145-demonic-calling',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_impoweredimp.jpg'
                },
            ];
            data.Demonology[30] = [
                {
                    name: 'Impending Doom',
                    url: 'http://www.wowdb.com/spells/196270-impending-doom',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_impphaseshift.jpg'
                },
                {
                    name: 'Improved Dreadstalkers',
                    url: 'http://www.wowdb.com/spells/196272-improved-dreadstalkers',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_empoweredimp.jpg'
                },
                {
                    name: 'Implosion',
                    url: 'http://www.wowdb.com/spells/196277-implosion',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_shadowandflame.jpg'
                },
            ];
            data.Demonology[45] = [
                {
                    name: 'Demonic Circle',
                    url: 'http://www.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Shadowfury',
                    url: 'http://www.wowdb.com/spells/30283-shadowfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
            ];
            data.Demonology[60] = [
                {
                    name: 'Hand of Doom',
                    url: 'http://www.wowdb.com/spells/196283-hand-of-doom',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_handofguldan.jpg'
                },
                {
                    name: 'Power Trip',
                    url: 'http://www.wowdb.com/spells/196605-power-trip',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demonictactics.jpg'
                },
                {
                    name: 'Soul Harvest',
                    url: 'http://www.wowdb.com/spells/196098-soul-harvest',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonsoul.jpg'
                },
            ];
            data.Demonology[75] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.Demonology[90] = [
                {
                    name: 'Grimoire of Supremacy',
                    url: 'http://www.wowdb.com/spells/152107-grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://www.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofservice.jpg'
                },
                {
                    name: 'Grimoire of Synergy',
                    url: 'http://www.wowdb.com/spells/171975-grimoire-of-synergy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.Demonology[100] = [
                {
                    name: 'Summon Darkglare',
                    url: 'http://www.wowdb.com/spells/205180-summon-darkglare',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/achievement_boss_durumu.jpg'
                },
                {
                    name: 'Demonbolt',
                    url: 'http://www.wowdb.com/spells/157695-demonbolt',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonbolt.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://www.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
            ];

            // BFA Demonlogy
            data.BFADemonology[15] = [
                {
                    name: 'Demonic Strength',
                    url: 'http://beta.wowdb.com/spells/264057-demonic-strength',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_shadowbolt.d579173e08a44fe67765cf9a9c0489b7c8a7edc4.jpg'
                },
                {
                    name: 'Demonic Calling',
                    url: 'http://beta.wowdb.com/spells/205145-demonic-calling',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_impoweredimp.jpg'
                },
                {
                    name: 'Doom',
                    url: 'http://beta.wowdb.com/spells/265412-doom',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_shadow_auraofdarkness.801acd7236672952f66846356dcff587f734865f.jpg'
                },
            ];
            data.BFADemonology[30] = [
                {
                    name: 'Riders',
                    url: 'http://beta.wowdb.com/spells/264078-riders',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_handofguldan.d70d8379664054d1dcd15d4491564407207fa6ac.jpg'
                },
                {
                    name: 'Power Siphon',
                    url: 'http://beta.wowdb.com/spells/264130-power-siphon',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_backdraft.32342ceaa5f8b67cc47c51d02a543f82febb507a.jpg'
                },
                {
                    name: 'Summon Vilefiend',
                    url: 'http://beta.wowdb.com/spells/264119-summon-vilefiend',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/inv_argusfelstalkermount.90996e938f73c9c98badca3ec92b8cf275602c62.jpg'
                },
            ];
            data.BFADemonology[45] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.BFADemonology[60] = [
                {
                    name: 'Overloaded',
                    url: 'http://beta.wowdb.com/spells/267170-overloaded',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_handofguldan.jpg'
                },
                {
                    name: 'Demonic Strength',
                    url: 'http://beta.wowdb.com/spells/267171-demonic-strength',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_demonicempowerment.f74cd065dabf21dff8cd55178c94445120becb22.jpg'
                },
                {
                    name: 'Bilescourge Bombers',
                    url: 'http://beta.wowdb.com/spells/267211-biliescourge-bombers',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_hunter_pet_bat.4b98ab4e9d0bae001bd82761cbaaf7c1ccb4ffbb.jpg'
                },
            ];
            data.BFADemonology[75] = [
                {
                    name: 'Darkfury',
                    url: 'http://beta.wowdb.com/spells/264874-darkfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.beta.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Demonic Circle',
                    url: 'http://www.beta.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
            ];
            data.BFADemonology[90] = [
                {
                    name: 'Grimoire of Synergy',
                    url: 'http://beta.wowdb.com/spells/171975-grimoire-of-synergy',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/warlock_grimoireofsacrifice.d36a1443aee2da141a379a10e4e3312158495174.jpg'
                },
                {
                    name: 'Demonic Consumption',
                    url: 'http://beta.wowdb.com/spells/267215-demonic-consumption',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_soulburn.e27c49660a6eb6d557d1755d728f7bd6613189be.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://beta.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/warlock_grimoireofservice.acd8ca5e554dc43d76aa5571f97f31ddd272ef86.jpg'
                },
            ];
            data.BFADemonology[100] = [
                {
                    name: 'Inner Demons',
                    url: 'http://beta.wowdb.com/spells/267216-inner-demons',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/ability_warlock_eradication.3af47ada116062f96515af05ba718c30b034f8a3.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://beta.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
                {
                    name: 'Nether Portal',
                    url: 'http://beta.wowdb.com/spells/267217-nether-portal',
                    img: 'http://media-azeroth.cursecdn.com/wow/icons/large/spell_warlock_demonicportal_green.79241940d3be099c0d7a3cdaf29589108a4ac614.jpg'
                },
            ];

            // Destro
            data.Destruction[15] = [
                {
                    name: 'Backdraft',
                    url: 'http://www.wowdb.com/spells/196406-backdraft',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_backdraft.jpg'
                },
                {
                    name: 'Roaring Blaze',
                    url: 'http://www.wowdb.com/spells/205184-roaring-blaze',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_inferno.jpg'
                },
                {
                    name: 'Shadowburn',
                    url: 'http://www.wowdb.com/spells/17877-shadowburn',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_scourgebuild.jpg'
                },
            ];
            data.Destruction[30] = [
                {
                    name: 'Reverse Entropy',
                    url: 'http://www.wowdb.com/spells/205148-reverse-entropy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_backdraftgreen.jpg'
                },
                {
                    name: 'Eradication',
                    url: 'http://www.wowdb.com/spells/196412-eradication',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_eradication.jpg'
                },
                {
                    name: 'Empowered Life Tap',
                    url: 'http://www.wowdb.com/spells/235157-empowered-life-tap',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_manafeed.jpg'
                },
            ];
            data.Destruction[45] = [
                {
                    name: 'Demonic Circle',
                    url: 'http://www.wowdb.com/spells/48018-demonic-circle',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_demoniccirclesummon.jpg'
                },
                {
                    name: 'Mortal Coil',
                    url: 'http://www.wowdb.com/spells/108396-mortal-coil',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_mortalcoil.jpg'
                },
                {
                    name: 'Shadowfury',
                    url: 'http://www.wowdb.com/spells/30283-shadowfury',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_shadowfurytga.jpg'
                },
            ];
            data.Destruction[60] = [
                {
                    name: 'Cataclysm',
                    url: 'http://www.wowdb.com/spells/152108-cataclysm',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/achievement_zone_cataclysm.jpg'
                },
                {
                    name: 'Fire and Brimstone',
                    url: 'http://www.wowdb.com/spells/196408-fire-and-brimstone',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_fireandbrimstone.jpg'
                },
                {
                    name: 'Soul Harvest',
                    url: 'http://www.wowdb.com/spells/196098-soul-harvest',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_warlock_demonsoul.jpg'
                },
            ];
            data.Destruction[75] = [
                {
                    name: 'Demon Skin',
                    url: 'http://www.wowdb.com/spells/219272-demon-skin',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_felarmour.jpg'
                },
                {
                    name: 'Burning Rush',
                    url: 'http://www.wowdb.com/spells/111400-burning-rush',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_deathwing_sealarmorbreachtga.jpg'
                },
                {
                    name: 'Dark Pact',
                    url: 'http://www.wowdb.com/spells/108416-dark-pact',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_sacrificial_pact.jpg'
                },
            ];
            data.Destruction[90] = [
                {
                    name: 'Grimoire of Supremacy',
                    url: 'http://www.wowdb.com/spells/152107-grimoire-of-supremacy',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofcommand.jpg'
                },
                {
                    name: 'Grimoire of Service',
                    url: 'http://www.wowdb.com/spells/108501-grimoire-of-service',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofservice.jpg'
                },
                {
                    name: 'Grimoire of Sacrifice',
                    url: 'http://www.wowdb.com/spells/108503-grimoire-of-sacrifice',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/warlock_grimoireofsacrifice.jpg'
                },
            ];
            data.Destruction[100] = [
                {
                    name: 'Wreak Havoc',
                    url: 'http://www.wowdb.com/spells/196410-wreak-havoc',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/ability_warlock_baneofhavoc.jpg'
                },
                {
                    name: 'Channel Demonfire',
                    url: 'http://www.wowdb.com/spells/196447-channel-demonfire',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_fire_ragnaros_lavaboltgreen.jpg'
                },
                {
                    name: 'Soul Conduit',
                    url: 'http://www.wowdb.com/spells/215941-soul-conduit',
                    img: 'https://blzmedia-a.akamaihd.net/wow/icons/56/spell_shadow_soulleech_2.jpg'
                },
            ];

            console.log(this.id);
            data[selectedSpec].forEach(function (e, i) {
                container.innerHTML += `
                <div id="talent-id-${talentId}" class="talent-row">
                    <div class="talent-level"><h2>${i}</h2></div>
                    <div class="talent talent-1"><a href="${e[0].url}"><i class="icon" style="background-image: url(${e[0].img});"></i><h2>${e[0].name}</h2></a></div>
                    <div class="talent talent-2"><a href="${e[1].url}"><i class="icon" style="background-image: url(${e[1].img});"></i><h2>${e[1].name}</h2></a></div>
                    <div class="talent talent-3"><a href="${e[2].url}"><i class="icon" style="background-image: url(${e[2].img});"></i><h2>${e[2].name}</h2></a></div>
                </div>`;
            });

            // add active class
            selectedTalents.split('').forEach(function (e, i) {
                var selectedTalent = document.querySelectorAll('#talent-id-' + talentId + '.talent-row:nth-child(' + (i + 1) + ') .talent-' + e)[0];
                if (selectedTalent) selectedTalent.classList.add('active');
            });
        }
    },
    methods: {

    },
    events: {

    }
});
