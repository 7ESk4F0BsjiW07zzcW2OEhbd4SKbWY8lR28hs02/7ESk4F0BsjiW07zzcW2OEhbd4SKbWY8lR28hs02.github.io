// not the full code but enough to debug
// jquery is already imported and gm works perfectly fine when debugged using console.log
// the issue only happens with the checkboxes themselves

velocity.hacks.speed.enabled = GM_getValue("velocity.hacks.speed.enabled", false)

$("[type=checkbox]").each(function() {
    $(this).prop('checked',
                 GM.getValue(`velocity.hacks.${$(this).attr('id').split("-")[0]}.enabled`, false)
    )
    $(this).on('click', () => {
        GM.setValue(`velocity.hacks.${$(this).attr('id').split("-")[0]}.enabled`, $(this).is(':checked'))
        console.log($(this).is(':checked'))
    })
})
