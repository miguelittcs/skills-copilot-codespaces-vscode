function skillsMembers() {
    return {
        name: "members",
        description: "Get members of a group",
        options: [
        {
            name: "group_id",
            description: "ID of the group",
            type: 3,
            required: true,
        },
        ],
    };
}