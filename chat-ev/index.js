ll.registerPlugin("chatEvent", "LLBDS chatEvent", [0, 0, 1]);
mc.listen("onChat" (ev) = {
  log(`${ev.name}` > ${ev.msg})
})
