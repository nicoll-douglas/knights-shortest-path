import { Flex, Text, Heading, Code } from "@chakra-ui/layout";
import Section from "./Section";
import Steps from "../code/Steps";
import PossibleMoves from "../code/PossibleMoves";
import NumberOfMoves from "../code/NumberOfMoves";
import TraverseTree from "../code/TraverseTree";

export default function Solution() {
  return (
    <>
      <Heading display={{ base: "block", xl: "none" }}>Solution</Heading>
      <Flex gap={10} flexDir={"column"}>
        <Section
          aria-label="Solution Part 1"
          codeSnippet={<Steps style={{ flex: 1 }} />}
        >
          <Heading display={{ base: "none", xl: "block" }}>Solution</Heading>
          <Heading size={"md"}>Part 1 - How does the Knight Move</Heading>
          <Text>
            My first thought when attempting this problem was how the knight
            moves on the chess board. Anyone who has played chess knows the
            classic L shape where the knight moves 2 across, 1 up or vice versa
            in any direction.
          </Text>
          <Text>
            So I represented these as an array, <Code>STEPS</Code>, with each
            element representing a vector by which the knight may travel on the
            board totalling to 8.
          </Text>
        </Section>

        <Section aria-label="Solution Part 2" codeSnippet={<PossibleMoves />}>
          <Heading size={"md"}>Part 2 - Possible Moves</Heading>
          <Text>
            My next thought was that, for every position that a knight can be
            placed on the board, that position will not always have 8 possible
            moves. Some moves could be &quot;off&quot; the board. So it would be
            necessary to create a function in order to discern the valid moves
            from a given position: <Code>getPossibleKnightMoves</Code>
          </Text>
          <Text>
            If we are representing the steps a knight can take with vectors then
            we must also represent the positions on the board in a similar way.
            A chess board is 8x8 so I numbered the rows and columns 0-7; array{" "}
            <Code>[0, 0]</Code> being bottom-left and <Code>[7, 7]</Code> being
            top-right.
          </Text>
          <Text>
            Naturally, moves that are contained inside this board cannot have
            coordinate values less than 0 or greater than 7. And so,{" "}
            <Code>getPossibleKnightMoves</Code> numerically adds each of the
            step vectors to the position to check this, eventually returning an
            array, <Code>moves</Code>, of the possible moves that can be made
          </Text>
        </Section>

        <Section aria-label="Solution Part 3" codeSnippet={<TraverseTree />}>
          <Heading size={"md"}>Part 3 - Uncovering the Algorithm</Heading>
          <Text>
            Next I had to figure out how I would obtain the shortest path
            between any two points given that I could now calculate the possible
            moves for any position.
          </Text>
          <Text>
            Eventually, I figured that arriving at this solution would evidently
            require a representation of a tree data structure. Each layer/level
            of the tree would represent possible positions that could be reached
            from the starting point and they would also be possible moves based
            on a position in a level 1 up. This also meant the depth of each
            level would represent the number of moves required from the starting
            point.
          </Text>
          <Text>
            I figured that a breadth-first search of the tree would be most
            appropriate as we want to inch our way to the target with knight
            moves and check each of the possible moves along the way to see if
            it is the target. My implementation of this involved a queue of the
            tree nodes, represented by array <Code>queue</Code>.
          </Text>
          <Text>
            I would iterate over <Code>queue</Code> with a while loop (starting
            with the initial position <Code>initialPosition</Code>) and check:
            is the current position of the knight the target position? If not,
            remove it from the queue and get its possible moves (moves that
            would live in the next layer of the tree).
          </Text>
          <Text>
            For each of the possible moves, we push the possible move to the
            queue to examine whether it is the target position in a future
            iteration.
          </Text>
          <Text>
            The <Code>breadthFirstSearch</Code> function performs this
            implementation over and over until the target is eventually found.
            However it leaves the one key problem unsolved: it doesn&apos;t tell
            us the number of moves to the target once it is reached.
          </Text>
        </Section>

        <Section aria-label="Solution Part 4" codeSnippet={<NumberOfMoves />}>
          <Heading size={"md"}>Part 4 - Obtaining the Result</Heading>
          <Text>
            In order to count the number of moves, my idea was to tweak the
            traversal/search implementation and implement a counter that would
            note the number of moves for a new possible position upon discovery,
            based on the move count for the current position. This would allow
            the implementation to derive a useful return value.
          </Text>
          <Text>
            I decided the counter to be an object <Code>movesCounter</Code>{" "}
            where positions map to the count. The count for moves from the
            initial position to the initial position is trivially 0 and so:{" "}
            <Code>movesCounter[initialPosition.toString()] = 0;</Code> which we
            use as our starting point to calculate future move counts.
          </Text>
          <Text>
            Then, upon each iteration of the loop, the move counts of new
            possible positions would be registered to the counter object. Taking
            one new possible position, <Code>move</Code>, it&apos;s move count:{" "}
            <Code>movesCounter[move.toString()]</Code>, would be the move count
            of the current position plus 1 i.e:{" "}
            <Code>movesCounter[currentPosition.toString()] + 1</Code> (which
            would already be recorded in the counter object from a previous
            iteration).
          </Text>
          <Text>
            Moves already being recorded in the counter also brings up a key
            point. If a possible move is already registered in the counter, i.e:{" "}
            <Code>move.toString() in movesCounter === true</Code>, it would mean
            the position was already visited with a shorter path in a previous
            iteration. The path being shorter because if we are doing a
            breadth-first traversal and thus the depth level represents the
            number of moves to get to that duplicate position, then the visited
            node/position must be in the same level or higher of the tree. So we
            return if the possible move was already traversed because we know a
            shorter path to it already exists (essentially killing that branch
            of the tree by not pushing it to the queue and avoiding path
            conflicts in the counter).
          </Text>
          <Text>
            And so, having refactored the <Code>breadthFirstSearch</Code>{" "}
            function into a complete function solution:{" "}
            <Code>shortestNumberOfKnightMoves</Code>, on termination of the
            loop, the move count to the target will be registered in the{" "}
            <Code>movesCounter</Code> and <em>that</em>, is the shortest number
            of knight moves from the initial position.
          </Text>
        </Section>
      </Flex>
    </>
  );
}
