import React, { version } from 'react';
import { Box, Menu, Button, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { LANG_VERSIONS } from '../constants'


function LangSwitch() {

    const languages = Object.entries(LANG_VERSIONS);
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
                Langage:
            </Text>

            <Menu>
                <MenuButton as={Button}>{languages}</MenuButton>

                <MenuList>
                    {languages.map(([languages, version]) =>
                        <MenuItem key={languages} onClick={() => onselect(languages)}>
                            {languages}
                            <Text as="span" color="gray.600" fontSize={sm}>
                                ({version})
                            </Text>
                        </MenuItem>
                    )}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LangSwitch
