import {
  Flex,
  Text,
  Heading,
  Code,
  Box,
  OrderedList,
  ListItem,
  Link,
  Button,
} from "@chakra-ui/react";
import Section from "./Section";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Steps,
  GetPossibleKnightMoves,
  ShortestNumberOfKnightMoves,
  BreadthFirstSearch,
} from "../code";

export default function Solution() {
  return (
    <Box maxW={"full"} as="article" aria-labelledby="heading-2">
      <Heading id="heading-2">Solution</Heading>
      <Button
        href="https://github.com/nicoll-douglas/knights-shortest-path/tree/main/src/lib/knights-shortest-path"
        as={Link}
        variant={"link"}
        target="_blank"
        mb={6}
      >
        Source <ExternalLinkIcon mx={"3px"} />
      </Button>
      <Flex gap={10} flexDir={"column"}>
        <Section
          codeSnippet={<Steps style={{ flex: 1 }} />}
          heading={"Part 1 - How does the Knight Move"}
          snippetCaption={"steps.js"}
        >
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

        <Section
          codeSnippet={<GetPossibleKnightMoves />}
          heading={"Part 2 - Knight Moves vs. Possible Knight Moves"}
          snippetCaption={"getPossibleKnightMoves.js"}
        >
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
            <Code>[0, 0]</Code> being the bottom-left position and{" "}
            <Code>[7, 7] top-right</Code> for simplicity but the orientation of
            coordinates is arbitrary.
          </Text>
          <Text>
            Naturally, moves that are contained inside this board cannot have
            coordinate values less than 0 or greater than 7. And so,{" "}
            <Code>getPossibleKnightMoves</Code> numerically adds each of the
            vectors in <Code>STEPS</Code> to the position to check this,
            eventually returning an array, <Code>moves</Code>, of the possible
            moves that can be made
          </Text>
        </Section>

        <Section heading={"Part 3 - Uncovering the Algorithm"}>
          <Text>
            Next I had to figure out how I would obtain the shortest path
            between any two points given that I could now calculate the possible
            moves for any position.
          </Text>
          <Text>
            Eventually, I figured that arriving at this solution would require a
            representation of a tree data structure given how possible positions
            could grow indefinitely. Each node in a layer/level of the tree
            would represent the possible moves based on a position in the
            previous level of the tree, starting with the initial position in
            the first level. This also meant the depth of a node/position in the
            tree would represent the number of moves required from the starting
            point to get there.
          </Text>
          <Text>
            I figured that a breadth-first search of the tree would be most
            appropriate as we want to systematically inch our way to the target
            with knight moves and check each of the possible moves along the way
            to see if it is the target. I would use a classic queue
            implementation of tree nodes lined up breadth-first to perform the
            search, which would eventually be represented by an array:{" "}
            <Code>queue</Code>.
          </Text>
        </Section>

        <Section
          heading="Part 4 - Implementing the Algorithm"
          codeSnippet={<BreadthFirstSearch />}
          snippetCaption={"breadthFirstSearch.js"}
        >
          <Text>
            Now that I had the algorithm I could start working on the solution.
            Given that our array <Code>queue</Code> would represent the search,
            the implementation would then go something like this:
          </Text>
          <OrderedList>
            <ListItem>
              Get the current position in the the queue (<Code>queue[0]</Code>{" "}
              and initially <Code>initialPosition</Code>)
            </ListItem>
            <ListItem>
              Check: is the current position of the knight the target position?
            </ListItem>
            <ListItem>
              If not:
              <OrderedList>
                <ListItem>
                  remove it from the queue and get its possible moves (moves
                  that would live in the next layer of the tree).
                </ListItem>
                <ListItem>
                  Push all the possible moves to the queue to examine whether
                  any of them is the target in a future iteration.
                </ListItem>
                <ListItem>
                  For all the possible moves of the current position, preserve
                  the fact in some way that it took one more move to get there
                  than it did to get to the current position.
                </ListItem>
                <ListItem>
                  Perform the algorithm again from step 1 to check the next node
                  in the queue.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              If yes:
              <OrderedList>
                <ListItem>
                  We found our target so we can stop the search.
                </ListItem>
                <ListItem>
                  If we preserved the number of moves for each previous position
                  along the way, then our answer would be the number of moves
                  associated with our target.
                </ListItem>
              </OrderedList>
            </ListItem>
          </OrderedList>
          <Text>
            The <Code>breadthFirstSearch</Code> function, which was my initial
            attempt, performed the main idea of this implementation with a while
            loop over <Code>queue</Code>. However it did not perform step 3.3 of
            which step 4.2, our answer, depends on. The next step would be to
            figure out how this could be done in order to tweak the function.
          </Text>
        </Section>

        <Section heading={"Part 5 - Counting Moves"}>
          <Text>
            In order to preserve the number of moves for positions that had been
            traversed in the search as described in 3.3, my idea would be a
            counter object <Code>movesCounter</Code> where positions would map
            to the count.
          </Text>
          <Text>
            The count for moves from the initial position to the initial
            position would trivially be 0 and so we would use that as our basis
            in order to calculate future move counts. i.e,{" "}
            <Code>movesCounter[initialPosition.toString()] = 0;</Code>.
          </Text>
          <Text>
            Then, upon each iteration of the loop, the move counts of new
            possible positions would be registered to the counter object which
            would thus perform step 3.3 in the implementation. i.e for every
            possible move <Code>move</Code> of <Code>currentPosition</Code>,{" "}
            <Code>
              movesCounter[move.toString()] =
              movesCounter[currentPosition.toString()] + 1
            </Code>
            .
          </Text>
          <Text>
            In theory this would then give us our answer in step 4.2 of the
            implementation. However, we would need to consider the possibility
            of a value in the counter object being overriden in the loop and
            thus introducing potential bugs and messing up crucial move-count
            data we would need for future iterations.
          </Text>
        </Section>
        <Section
          heading={"Part 6 - Obtaining the Correct Result"}
          codeSnippet={<ShortestNumberOfKnightMoves />}
          snippetCaption={"shortestNumberOfKnightMoves.js"}
        >
          <Text>
            Getting around the problem of overriding took a bit of thinking but
            eventually, my eureka thought process was this:
          </Text>
          <OrderedList>
            <ListItem>
              For the current possible move who&apos;s move count we are about
              to register, is it already registered?
            </ListItem>
            <ListItem>
              Assuming yes, this means it has already been traversed once in the
              search so when was it traversed?
            </ListItem>
            <ListItem>
              It was traversed, at its most recent, in the current layer of the
              tree we are searching or in a previous layer otherwise.
            </ListItem>
            <ListItem>
              This means that the move count that is already registered for the
              same move, is at most, the move count we are about to register
              (since depth represents the count).
            </ListItem>
            <ListItem>
              Contextually, what this means is that we have found{" "}
              <strong>a duplicate route through the same position </strong>
              on the way to our target.
            </ListItem>
            <ListItem>
              Aha! Therefore, we should only keep the route with the shorter
              move count since shortest is all we care about and it saves us
              from move-count overrides we didn&apos;t want, and now, absolutely
              don&apos;t want.
            </ListItem>
          </OrderedList>
          <Text>
            So given this, we should avoid pushing the current possible move to
            the queue if it&apos;s count is already registered.
          </Text>
          <Text>
            And so, that leaves us with a refactored and complete function
            solution: <Code>shortestNumberOfKnightMoves</Code> where we
            implement the moves counter and prevent new counts for duplicate
            moves being registered.
          </Text>
          <Text>
            Once the loop terminates, we can be certain that our answer is{" "}
            <Code>movesCounter[targetPosition.toString()]</Code> which we can
            return from our function. And <em>that</em>, is the shortest number
            of knight moves from the initial position.
          </Text>
        </Section>
      </Flex>
    </Box>
  );
}
