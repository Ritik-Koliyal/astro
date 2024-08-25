const MAX_FLOW_DIFFERENCE = 0.2; // Top astrologers can handle 20% more users

// Function to distribute users dynamically to astrologers
exports.distributeUsersToAstrologers = (users, astrologers) => {
  users.forEach((user) => {
    // Sort astrologers based on their current flow and top astrologer status
    astrologers.sort((a, b) => {
      // Calculate the max flow each astrologer can handle
      const maxFlowA = a.isTopAstrologer
        ? a.currentFlow * (1 + MAX_FLOW_DIFFERENCE) // Top astrologer can handle more
        : a.currentFlow;
      const maxFlowB = b.isTopAstrologer
        ? b.currentFlow * (1 + MAX_FLOW_DIFFERENCE)
        : b.currentFlow;

      // Sort based on max flow, ensuring lower flow astrologers come first
      return maxFlowA - maxFlowB;
    });

    // Assign the user to the astrologer with the least current flow
    const astrologer = astrologers[0];

    // Log the assignment
    console.log(`${user.name} assigned to ${astrologer.name}`);

    // Update the astrologer's current flow after assigning the user
    astrologer.currentFlow += 1;
  });
};
