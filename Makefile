
BUILD	:= build
SOURCES := src

COFFEEFLAGS	:= -bcj
COFFEEFILES := $(foreach dir,$(SOURCES),$(notdir $(wildcard $(dir)/*.coffee)))
OUTPUT	:= $(shell basename $(CURDIR)).js

VPATH	:= $(foreach dir,$(SOURCES),$(CURDIR)/$(dir))

.PHONY: clean, $(OUTPUT)

all: $(OUTPUT)
	

clean:
	@rm -rf $(BUILD)

$(OUTPUT): $(BUILD)
	coffee $(COFFEEFLAGS) $(BUILD)/$@ src

$(BUILD):
	@mkdir $@

